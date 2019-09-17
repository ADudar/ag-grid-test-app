import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {AgGridAngular} from 'ag-grid-angular';
import {map, tap} from 'rxjs/operators';
import {Item, SearchListResponse, ViewVideoItem} from './models';
import {SearchListService} from './search-list.service';
import {CountStatusBarComponent} from './count-status-bar/count-status-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('agGrid', {static: true}) agGrid: AgGridAngular;

  rowData: Observable<ViewVideoItem[]>;

  columnDefs = [
    {
      headerName: '', field: 'thumbnail', sortable: true, filter: true, checkboxSelection: true,
      cellRenderer: (params) => {
        return `<img alt="image" src="${params.value}">`;
      }
    },
    {headerName: 'Published on', field: 'publishedAt', sortable: true, filter: true},
    {
      headerName: 'Video Title', field: 'title', sortable: true, filter: true,
      cellRenderer: (params) => {
        const videoUrl = `https://www.youtube.com/watch?v=`;
        const {name, videoId} = params.value;
        const fullVideoUrl = videoUrl + videoId;
        return `
        <a href="${fullVideoUrl}" target="_blank">${name}</a>`;
      }
    },

    {headerName: 'Description', field: 'description', sortable: true, filter: true}
  ];


  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  statusBar = {
    statusPanels: [
      {statusPanel: 'countStatusBarComponent'}
    ]
  };

  frameworkComponents = {
    countStatusBarComponent: CountStatusBarComponent
  };

  constructor(private searchListService: SearchListService) {
  }

  static mapToViewFunction(list: SearchListResponse): ViewVideoItem[] {
    return list.items.map((item: Item) => ({
      title: {name: item.snippet.title, videoId: item.id.videoId},
      publishedAt: item.snippet.publishedAt,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url,
    }));
  }

  ngOnInit() {
    this.rowData = this.searchListService.getVideos()
      .pipe(
        tap(() => this.setRowHeight(90)),
        map(AppComponent.mapToViewFunction)
      );
  }

  setRowHeight(height: number) {
    this.agGrid.gridOptions.rowHeight = height;
  }
}
