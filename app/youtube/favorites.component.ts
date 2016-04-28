import {Component, EventEmitter, Output, Input} from 'angular2/core';
import {GoogleAPI} from  './google.service';
import {WINDOW_PROVIDERS} from  './window.service';
import {ScriptLoader} from  './google.scriptloader';
import {YoutubeService} from  './youtube.service';
import {YoutubeFavorites} from './Favorites';
import {YoutubeItem, YoutubeStorageItem} from './Youtube';

@Component({
  selector: 'bc-youtube-favorites',
  templateUrl: 'app/youtube/favorites.template.html'
})

export class FavoritesComponent{
  @Output() playVideo:EventEmitter<YoutubeItem>;
  @Input() videoToPlay:YoutubeItem;
  youtubeFavorites:YoutubeFavorites;
  youtubeFavoritesItems:Array<YoutubeStorageItem>;

  constructor(private _youtubeService:YoutubeService){
    this.youtubeFavorites = new YoutubeFavorites();
    this.youtubeFavoritesItems = this.youtubeFavorites.getItems();
    this.playVideo = new EventEmitter<YoutubeItem>();
  }

  public removeFavoriteVideo(youtubeItem:YoutubeItem){
    this.youtubeFavoritesItems = this.youtubeFavorites.removeItem(youtubeItem);
  }

  public playFavVideo(item:YoutubeStorageItem){
    this._youtubeService.runYoutubeVideo(item.id).then((item:YoutubeItem)=>{
      this.playVideo.emit(item);
    });
  }

  public updateView(){
    this.youtubeFavoritesItems = this.youtubeFavorites.getItems();
  }
}
