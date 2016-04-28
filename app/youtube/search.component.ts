import {Component, Output, EventEmitter} from 'angular2/core';
import {YoutubeService} from  './youtube.service';
import {SearchCriteria} from './SearchCriteria';
import {YoutubeVideos} from './Youtube';

@Component({
    selector: 'bc-youtube-search',
    templateUrl: 'app/youtube/search.template.html'
})
export class SearchComponent {
  @Output() loadVideos:EventEmitter<YoutubeVideos>;
  constructor(private _youtubeService:YoutubeService, private _searchCriteria:SearchCriteria){
    this.loadVideos = new EventEmitter<YoutubeVideos>();
  }

  public youtubeSearch(newValue) {
    this._searchCriteria.youtubeSearch().then((videos:YoutubeVideos) => {
      this.loadVideos.emit(videos);
    })
  }
}
