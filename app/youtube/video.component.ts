import {Component, Output, EventEmitter} from 'angular2/core';
import {YoutubeVideos, YoutubeItem, YoutubeVideoStatistics, YoutubeVideoComments,YoutubeStorageItem} from './Youtube';
import {YoutubeFavorites} from './Favorites';
import {YoutubeService} from  './youtube.service';
import {CommaSeparatedNumberPipe} from './commaSeparatedNumber.pipe';

@Component({
  selector: 'bc-youtube-video',
  templateUrl: 'app/youtube/video.template.html',
  pipes:[CommaSeparatedNumberPipe]
})

export class VideoComponent{
  showComponent:boolean;
  videoURL:string;
  currentItem:YoutubeItem;
  youtubeFavorites:YoutubeFavorites;
  currentItemInFav:boolean;
  videoComments:YoutubeVideoComments;
  @Output() addToFavorites:EventEmitter<boolean>;
  constructor(private _youtubeService:YoutubeService){
    this.youtubeFavorites = new YoutubeFavorites();
    this.videoComments = new YoutubeVideoComments({});
    this.addToFavorites = new EventEmitter<boolean>();
    this.showComponent = false;
  }

  public playVideo(item:YoutubeItem){
      this._youtubeService.runYoutubeStatistics(item).then((stat:YoutubeVideoStatistics)=>{
        item.statistics = stat;
        this.setVideoURL(item.id);
        this.currentItem = item;
        this.currentItemInFav = this.youtubeFavorites.isInFavs(this.currentItem.id);
        this.showComponent = true;
      });

  }

  public showComments(item:YoutubeItem){
    if(item.statistics.commentCount > 0){
      this._youtubeService.runYoutubeComments(item).then((comments:YoutubeVideoComments)=>{
        this.videoComments = comments;
      });
    }else{
      this.videoComments = new YoutubeVideoComments({});
    }
  }

  public getMoreComments(item:YoutubeItem, youtubeVideoComments:YoutubeVideoComments){
      this._youtubeService.runYoutubeGetMoreComments(item,youtubeVideoComments).then((comments:YoutubeVideoComments)=>{
        this.videoComments = comments;
      });
  }

  public setVideoURL(_videoId){
    var videoURL = 'http://www.youtube.com/embed/'+_videoId;    
    this.videoURL = videoURL;
  }

  public closeVideo(){
    this.videoComments = new YoutubeVideoComments({});
    this.showComponent = false;
   }

  public favoriteVideo(){
    this.youtubeFavorites.addItem(this.currentItem);
    this.addToFavorites.emit(true);
    this.currentItemInFav = this.youtubeFavorites.isInFavs(this.currentItem.id);
  }
}
