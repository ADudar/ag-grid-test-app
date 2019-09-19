import {ColumnApi, GridApi} from 'ag-grid-community';

export class SearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

export class Item {
  kind: string;
  etag: string;
  id: ID;
  snippet: Snippet;
}

export class ID {
  kind: string;
  videoId: string;
}

export class Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
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

export class ViewItem {

  title: string;
  publishedAt: Date;
  description: string;
  thumbnail: string;
  videoId: string;

  constructor(init: Partial<ViewItem>) {
    Object.assign(this, init);
  }

}

export class ViewTitle {
  name: string;
  videoId: string;
}

export class Params {
  api: GridApi;
  columnApi: ColumnApi;
  context: any;
  [key: string]: any;
}
