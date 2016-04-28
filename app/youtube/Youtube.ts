
import {YoutubeFavorites} from './Favorites';
export class YoutubeVideos{

  constructor(private _resultsObject){
  }

  get prevPageToken():string{
    return (this._resultsObject.prevPageToken) ? this._resultsObject.prevPageToken : '';
  }

  get nextPageToken():string{
    return (this._resultsObject.nextPageToken) ? this._resultsObject.nextPageToken : '';
  }

  get items():Array<YoutubeItem>{
    let returnArray:Array<YoutubeItem> = new Array();
    for (var item in this._resultsObject['items']) {
        returnArray.push(new YoutubeItem(this._resultsObject['items'][item]));
    }
    return returnArray;
  }

}

export class YoutubeItem{
  private _youtubeFavorites:YoutubeFavorites;
  private _youtubeVideoStatistics:YoutubeVideoStatistics;
  private _youtubeVideoComments:YoutubeVideoComments;
  constructor(private _searchItem){
    this._youtubeFavorites = new YoutubeFavorites();
  }
  get id():string{return (this._searchItem.id.videoId) ? this._searchItem.id.videoId : this._searchItem.id;}
  get title():string{return this._searchItem.snippet.title;}
  get description():string{return this._searchItem.snippet.description;}
  get channelTitle():string{return this._searchItem.snippet.channelTitle;}
  get channelId():string{return this._searchItem.snippet.channelId;}
  get publishedAt():string{return this._searchItem.snippet.publishedAt;}
  get thumbnailHigh():YoutubeThumbnail{
    return (this._searchItem.snippet.thumbnails.high)
      ? new YoutubeThumbnail(this._searchItem.snippet.thumbnails.high) :
      new YoutubeThumbnail({});
  }
  get thumbnailMedium():YoutubeThumbnail{
    return (this._searchItem.snippet.thumbnails.medium)
      ? new YoutubeThumbnail(this._searchItem.snippet.thumbnails.medium) :
      new YoutubeThumbnail({})
    };
  get thumbnailDefault():YoutubeThumbnail{
    return (this._searchItem.snippet.thumbnails.default)
      ? new YoutubeThumbnail(this._searchItem.snippet.thumbnails.default) :
      new YoutubeThumbnail({})
    };

  get statistics():YoutubeVideoStatistics{
    return (this._youtubeVideoStatistics)
      ? this._youtubeVideoStatistics :
      new YoutubeVideoStatistics({})
  };

  set statistics(_stats){
     this._youtubeVideoStatistics = new YoutubeVideoStatistics(_stats);
  }

  get videoComments():YoutubeVideoComments{
    return (this._youtubeVideoComments)
       ? this._youtubeVideoComments :
       new YoutubeVideoComments({})
  };

  set videoComments(_comments){
    this._youtubeVideoComments = _comments;
  }

  get itemJSONString():string{
    return JSON.stringify(this._searchItem);
  }
}


export class YoutubeThumbnail{
  constructor(private _thumbnail){};
  get url():string{return this._thumbnail.url;}
  get width():string{return this._thumbnail.width;}
  get height():string{return this._thumbnail.height;}
}

export class YoutubeVideoStatistics{
  constructor(private _stats){};
  get viewCount():number{return +this._stats.viewCount;}
  get likeCount():number{return +this._stats.likeCount;}
  get dislikeCount():number{return +this._stats.dislikeCount;}
  get commentCount():number{return +this._stats.commentCount;}
}

export class YoutubeVideoComments{
  _comments:Array<YoutubeComment> = new Array();
  _nextPageToken:string;
  constructor(private _commentsObject){
    this._nextPageToken = (this._commentsObject.nextPageToken) ? this._commentsObject.nextPageToken : '';
    for (var item in this._commentsObject['items']) {
        this._comments.push(new YoutubeComment(this._commentsObject['items'][item]));
    }
  };

  get nextPageToken():string{
    return this._nextPageToken;
  }

  get comments():Array<YoutubeComment>{
    return this._comments;
  }

  setMoreComments(moreCommentsObject){
    this._nextPageToken = (moreCommentsObject.nextPageToken) ? moreCommentsObject.nextPageToken : '';
    for (var item in moreCommentsObject['items']) {
        this._comments.push(new YoutubeComment(moreCommentsObject['items'][item]));
    } 
  }

}

export class YoutubeComment{
    constructor(private _comment){}
    get author():string{
      return this._comment.snippet.topLevelComment.snippet.authorDisplayName;
    }
    get imageURL():string{
      return this._comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
    }
    get textDisplay():string{
      return this._comment.snippet.topLevelComment.snippet.textDisplay;
    }
}

export class YoutubeStorageItem{
  id:string;
  title:string;
  description:string;
  url:string;
  constructor(){};
}
