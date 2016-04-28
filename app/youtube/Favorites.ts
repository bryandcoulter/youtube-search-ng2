import { Injectable } from 'angular2/core';
import {YoutubeItem, YoutubeStorageItem} from './Youtube';


@Injectable()
export class YoutubeFavorites{
  private storage: any;

  constructor() {
    this.storage = localStorage;
  }

  public retrieve(): any {
    let favItemsString:any = this.storage.getItem('youtubeFav');
    let favItems:Array<Object> = new Array<Object>();
    if(favItemsString && favItemsString !== 'undefined') {
      favItems = JSON.parse(favItemsString);
    }
    return favItems;
  }

  public addItem(item:YoutubeItem){
    let favItems:Array<Object> = this.retrieve();
    //convert the YoutubeItem into smaller stroage item to reduce size of localStorage
    let newYoutube:YoutubeStorageItem = new YoutubeStorageItem();
      newYoutube.id = item['id'];
      newYoutube.title = item['title'];
      newYoutube.description = item['description'];
      newYoutube.url = item.thumbnailDefault.url;
    favItems.push(newYoutube);
    this.store(favItems);
    return this.getItems();
  }

  public removeItem(item:YoutubeItem){
    let favItems:Array<YoutubeStorageItem> = this.getItems();
    for(var index in favItems){
      if(favItems[index].id === item.id){
        favItems.splice(parseInt(index),1);
      }
    }
    this.store(favItems);
    return favItems;
  }

  public isInFavs(itemId:string):boolean{
    let favItems:Array<YoutubeStorageItem> = this.getItems();
    var elementExists = favItems.filter(function(x) {
      return x.id === this;
    },itemId).length;
    let returnVal:boolean = false;
    if(elementExists > 0){
      returnVal = true;
    }
    return returnVal;
  }

  public getItems(){
    let favItemsObject:Array<Object> = this.retrieve();
    let favItems:Array<YoutubeStorageItem> = new Array<YoutubeStorageItem>();
    for(var index in favItemsObject){
      let newYoutube:YoutubeStorageItem = new YoutubeStorageItem();
        newYoutube.id = favItemsObject[index]['id'];
        newYoutube.title = favItemsObject[index]['title'];
        newYoutube.description = favItemsObject[index]['description'];
        newYoutube.url = favItemsObject[index]['url'];
      favItems.push(newYoutube);
    }
    return favItems;
  }

  public store(value) {
    this.storage.setItem('youtubeFav', JSON.stringify(value));
  }

  public parseItem


}
