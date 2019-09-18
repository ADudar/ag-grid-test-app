import {ColumnApi, GridApi} from 'ag-grid-community';
import {AngularFrameworkComponentWrapper} from 'ag-grid-angular';

export class SearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

export class Item {
  kind: ItemKind;
  etag: string;
  id: ID;
  snippet: Snippet;
}

export class ID {
  kind: IDKind;
  videoId: string;
}

export enum IDKind {
  YoutubeVideo = 'youtube#video',
}

export enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult',
}

export class Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: LiveBroadcastContent;
}

export enum LiveBroadcastContent {
  None = 'none',
}

export class Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export class Default {
  url: string;
  width: number;
  height: number;
}

export class PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export class ViewVideoItem {
  title: { name: string, videoId: string };
  publishedAt: Date;
  description: string;
  thumbnail: string;
}

export class ViewTitle {
  name: string;
  videoId: string;
}

export class Params {
  api: GridApi;
  columnApi: ColumnApi;
  context: any;
  frameworkComponentWrapper: AngularFrameworkComponentWrapper;

  [key: string]: any;
}
