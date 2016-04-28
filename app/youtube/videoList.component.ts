import {Component, Output, EventEmitter} from 'angular2/core';
import {YoutubeService} from  './youtube.service';
import {YoutubeVideos, YoutubeItem} from './Youtube';
import {SearchCriteria} from './SearchCriteria';

@Component({
    selector: 'bc-video-list',
    templateUrl: 'app/youtube/videoList.template.html'
})
export class VideoListComponent {
  @Output() playVideo:EventEmitter<YoutubeItem>;
  youtubeVideos:YoutubeVideos;
  constructor(private _youtubeService:YoutubeService, private _searchCriteria:SearchCriteria){
    this.youtubeVideos = new YoutubeVideos({});
    this.playVideo = new EventEmitter<YoutubeItem>();
  }

  public setVideos(videos:YoutubeVideos){
    this.youtubeVideos = videos;
  }

  public playVideoClick(video:YoutubeItem){
    this.playVideo.emit(video);
  }

  public onSortChange(newValue) {
    console.log(newValue);
    this._searchCriteria.setSearchSort(newValue);
    this._searchCriteria.setPageToken('');
    this._searchCriteria.youtubeSearch().then((videos:YoutubeVideos) => {
       this.setVideos(videos);
    })
  }

  public switchPage(token){
    this._searchCriteria.setPageToken(token);
    this._searchCriteria.youtubeSearch().then((videos:YoutubeVideos) => {
      this.setVideos(videos);
    })
  }


}
