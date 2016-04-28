import { Injectable } from 'angular2/core';
import {YoutubeService} from './youtube.service';
import {LatLng} from './LatLng';
import {YoutubeVideos} from './Youtube';

export class SelectOption{
  value:string;
  displayText:string;
}

@Injectable()
export class SearchCriteria{
    sortOptions:Array<SelectOption> = [
      {value:'relevance', displayText:'Relevance'},
      {value:'date', displayText:'Date'},
      {value:'rating', displayText:'Rating'},      
      {value:'title', displayText:'Title'},
    ];
    searchSortBy:string;
    searchText:string;
    addressText:string;
    searchRange:string;
    searchRanges:Array<SelectOption> = [
      {value:'100m', displayText:'100 Miles'},
      {value:'250m', displayText:'250 Miles'},
      {value:'500m', displayText:'500 Miles'},
      {value:'1000m', displayText:'1000 Miles'},
    ];
    latLng:LatLng;
    pageToken:string;

    constructor(private _youtubeService:YoutubeService){
      this.latLng = new LatLng();
    }

    public buildSearchCriteria(){
      return  new Promise((resolve) => {
        if(this.addressText){
          this._youtubeService.runGeoLocator(this.addressText).then((_latLng:LatLng)=>{
            this.latLng = _latLng;
            resolve(this.compileCriteria());
          })
        }else{
          resolve(this.compileCriteria());
        }
      });
    }

    private compileCriteria(){
      var returnObject = {
          part: 'snippet',
          q: this.searchText,
          order: 'relevance',
          type: 'video',
      };

      if(this.searchSortBy){
        returnObject.order = this.searchSortBy;
      }

      if(this.pageToken){
        returnObject['pageToken'] = this.pageToken;
      }

      if(this.addressText && this.latLng.status && this.searchRange){
         returnObject['location'] = this.latLng.lat + ', ' + this.latLng.lng;
         returnObject['locationRadius'] = this.searchRange;
      }
      return returnObject;
    }


    public onSearchRangeChange(newValue) {
      this.searchRange = newValue;
    }

    public setSearchSort(newValue) {
      this.searchSortBy = newValue;
    }

    public setPageToken(newValue) {
      this.pageToken = newValue;
    }

    public youtubeSearch(){
      return  new Promise((resolve) => {
      if(this.searchText){
        this.buildSearchCriteria().then((searchCriteria) => {
          this._youtubeService.runYoutubeSearch(searchCriteria).then((searchResults:YoutubeVideos) => {
            resolve(searchResults);
          });
        });
      }else{
        alert('Please Enter Search Text');
      }
    })
  }
}
