import {Component,ViewChild} from 'angular2/core';
import {GoogleAPI} from  './google.service';
import {WINDOW_PROVIDERS} from  './window.service';
import {ScriptLoader} from  './google.scriptloader';
import {YoutubeService} from  './youtube.service';
import {YoutubeVideos, YoutubeItem} from './Youtube';
import {SearchCriteria} from './SearchCriteria';
import {FavoritesComponent} from './favorites.component';
import {VideoComponent} from './video.component';
import {VideoListComponent} from './videoList.component';
import {SearchComponent} from './search.component';


@Component({
    selector: 'bc-youtube',
    templateUrl: 'app/youtube/youtube.template.html',
    directives:[FavoritesComponent,VideoComponent,VideoListComponent,SearchComponent],
    providers: [YoutubeService, GoogleAPI, WINDOW_PROVIDERS, ScriptLoader,SearchCriteria]
})
export class YouTube {

    @ViewChild(VideoListComponent)
    private _videoListComponent:VideoListComponent;

    @ViewChild(FavoritesComponent)
    private _favoritesComponent:FavoritesComponent;

    @ViewChild(VideoComponent)
    private _videoComponent:VideoComponent;

    constructor() {}

    public loadVideos(videos:YoutubeVideos){
      this._videoListComponent.setVideos(videos);
    }

    public playVideo(item:YoutubeItem){
        this._videoComponent.playVideo(item);
    }

    public addToFavorites(isCalled:boolean){
      this._favoritesComponent.updateView();
    }

}
