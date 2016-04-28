import { Injectable } from 'angular2/core';
import {GoogleAPI} from  './google.service';
import {LatLng} from './LatLng';
import {YoutubeVideos, YoutubeItem, YoutubeVideoStatistics, YoutubeVideoComments} from './Youtube';

@Injectable()
export class YoutubeService {

  private youtubeAPI: Promise<any>;
  private mapsAPI: Promise<any>;

  constructor(private _googleApi:GoogleAPI) {
    this.youtubeAPI = _googleApi.returnYoutubeApi();
    this.mapsAPI = _googleApi.returnGoogleMapsApi();
  }

  getYoutubeApi(){
    return this.youtubeAPI;
  }

  getMapsApi(){
    return this.mapsAPI;
  }

  runYoutubeSearch(searchCriteria){
    return  new Promise((resolve) => {
      this.youtubeAPI.then((theApi) => {
        var request:any = theApi.search.list(searchCriteria);
        request.execute(function(response) {
          let youtubeVideos:YoutubeVideos = new YoutubeVideos(response);
          resolve(youtubeVideos);
        });
      });
    });
  };


runYoutubeVideo(itemId:string){
  return  new Promise((resolve) => {
    this.youtubeAPI.then((theApi) => {
      var request:any = theApi.videos.list({
        part:'snippet',
        id:itemId
      });
      request.execute(function(response) {
        let video:YoutubeItem = new YoutubeItem(response['items'][0]);
        resolve(video);
      });
    });
  });
};

runYoutubeStatistics(item:YoutubeItem){
    return  new Promise((resolve) => {
      this.youtubeAPI.then((theApi) => {
        var request:any = theApi.videos.list({
          part:'statistics',
          id:item.id
        });
        request.execute(function(response) {          
          let statistics:YoutubeVideoStatistics = new YoutubeVideoStatistics(response['items'][0]['statistics']);
          resolve(statistics);
        });
      });
    });
  };

  runYoutubeComments(item:YoutubeItem){
    return  new Promise((resolve) => {
      this.youtubeAPI.then((theApi) => {
        var request:any = theApi.commentThreads.list({
          part:'snippet',
          videoId:item.id
        });
        request.execute(function(response) {
          let youtubeVideoComments:YoutubeVideoComments = new YoutubeVideoComments(response);
          resolve(youtubeVideoComments);
        });
      });
    });
  };

  runYoutubeGetMoreComments(item:YoutubeItem, youtubeVideoComments:YoutubeVideoComments){
    return  new Promise((resolve) => {
      this.youtubeAPI.then((theApi) => {
        var request:any = theApi.commentThreads.list({
          part:'snippet',
          videoId:item.id,
          pageToken:youtubeVideoComments.nextPageToken
        });
        request.execute(function(response) {
          youtubeVideoComments.setMoreComments(response);
          resolve(youtubeVideoComments);
        });
      });
    });
  };

  runGeoLocator(address){
    return  new Promise((resolve) => {
      this.mapsAPI.then((google) => {
        var geocoder = new google.maps.Geocoder();
           geocoder.geocode({'address': address}, function(results, status) {
             let returnLatLng : LatLng = {lat:'0',lng:'0',status:false};
              if (status === google.maps.GeocoderStatus.OK) {
                returnLatLng.lat = results[0].geometry.location.lat();
                returnLatLng.lng = results[0].geometry.location.lng();
                returnLatLng.status = true;
              }
              resolve(returnLatLng);
          });
        });
      });
    };
}
