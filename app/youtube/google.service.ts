import { Injectable } from 'angular2/core';
import {WINDOW} from './window.service';
import {ScriptLoader} from './google.scriptloader';

const youtubeUrl = 'https://apis.google.com/js/client.js?onload=__onGoogleLoaded';
const mapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBtEkpHUlXfs0pXfPmlESbenynV5lDHFAs&callback=initZipCode';


@Injectable()
export class GoogleAPI {
  youtubeAPIScript: Promise<any>;
  mapsAPIScript: Promise<any>;
  window: Window;

  constructor(win: WINDOW, scriptLoader:ScriptLoader){
    this.window = win.nativeWindow;
    this.youtubeAPIScript = scriptLoader.loadScript(this.window, youtubeUrl, '__onGoogleLoaded', 'gapi');
    this.mapsAPIScript = scriptLoader.loadScript(this.window, mapsUrl, 'initZipCode', 'google');
  }

  returnYoutubeApi(){
    return  new Promise((resolve) => {
      this.youtubeAPIScript.then((gapi) => {
      var apiKey = 'AIzaSyBtEkpHUlXfs0pXfPmlESbenynV5lDHFAs';
      gapi.client.setApiKey(apiKey);
      gapi.client.load('youtube', 'v3', function() {          
          resolve(gapi.client.youtube);
      });
    });
  });
  };

  returnGoogleMapsApi(){
    return  new Promise((resolve) => {
      this.mapsAPIScript.then((google) => {
        resolve(google);
      });
    });
  }


}
