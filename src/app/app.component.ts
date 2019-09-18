import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {AgGridAngular} from 'ag-grid-angular';
import {map, tap} from 'rxjs/operators';

import {Item, SearchListResponse, ViewTitle, ViewVideoItem} from './models';
import {SearchListService} from './search-list.service';
import {CountStatusBarComponent} from './count-status-bar/count-status-bar.component';
import {CountSelectedRecordsComponent} from './count-selected-records/count-selected-records.component';
import {SelectionToggleComponent} from './selection-toggle/selection-toggle.component';
import {ColumnApi, GridApi, GridOptions, RowNode} from 'ag-grid-community';
import {SelectionHeaderCheckboxComponent} from './selection-header-checkbox/selection-header-checkbox.component';
import {videoUrl} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('agGrid', {static: true}) agGrid: AgGridAngular;

  rowData: Observable<ViewVideoItem[]>;

  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
    },
    suppressMenuHide: true,
    columnDefs: [
      {
        headerName: '', field: 'selection', checkboxSelection: true, width: 40,
        sortable: false,
        filter: false,
        suppressMenu: true,
        customHeaderCheckboxSelection: (params) => {
          const displayedColumns = params.columnApi.getAllDisplayedColumns();
          return displayedColumns[0] === params.column;
        }
      } as any,
      {
        headerName: '', field: 'thumbnail', sortable: true, filter: true,
        cellRenderer: (params) => {
          return `<img alt="image" src="${params.value}">`;
        }
      },
      {headerName: 'Published on', field: 'publishedAt', sortable: true, filter: true},
      {
        headerName: 'Video Title', field: 'title', sortable: true, filter: true, width: 500,
        cellRenderer: (params: { value: ViewTitle }) => {
          const {name, videoId} = params.value;
          const fullVideoUrl = videoUrl + videoId;
          return `
        <a href="${fullVideoUrl}" target="_blank">${name}</a>`;
        }
      },

      {
        headerName: 'Description', field: 'description', sortable: true, filter: true,
        cellRenderer: (params) => {
          return `<div style="white-space: normal;">${params.value}</div>`;
        }
      },
    ],
    suppressRowClickSelection: true,
    statusBar: {
      statusPanels: [
        {statusPanel: 'selectionToggleComponent'},
        {statusPanel: 'countStatusBarComponent'},
        {statusPanel: 'countSelectedRecordsComponent'}
      ]
    },
    frameworkComponents: {
      countStatusBarComponent: CountStatusBarComponent,
      countSelectedRecordsComponent: CountSelectedRecordsComponent,
      selectionToggleComponent: SelectionToggleComponent,
      agColumnHeader: SelectionHeaderCheckboxComponent
    },
    rowSelection: 'multiple',
    popupParent: document.querySelector('body'),
    getContextMenuItems: () => this.getContextMenuItems(),
    context: this
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

  ngOnInit(): void {
    this.rowData = this.searchListService.getVideos()
      .pipe(
        tap(() => {
          const defaultColumnHeight = 90;
          this.setRowHeight(defaultColumnHeight);
        }),
        map(AppComponent.mapToViewFunction)
      );
  }

  setRowHeight(height: number): void {
    this.agGrid.gridOptions.rowHeight = height;
  }

  getContextMenuItems(): any[] {
    const openInNewTabAction = () => {
      const cell = this.agGrid.api.getFocusedCell();
      const rowNode: RowNode = this.agGrid.gridOptions.api.getDisplayedRowAtIndex(cell.rowIndex);
      const {name, videoId} = this.agGrid.api.getValue('title', rowNode) as ViewTitle;
      window.open(videoUrl + videoId, '_blank');
    };
    const openInNewTabItem = {
      name: 'Open in new tab',
      shortcut: 'Ctrl+Shift+Click',
      icon: this.getIcon(),
      action: openInNewTabAction
    };
    return [
      'copy',
      'copyWithHeaders',
      'paste',
      'separator',
      openInNewTabItem
    ];
  }

  onGridReady(event: { api: GridApi, columnApi: ColumnApi, type: string }): void {
    // console.log(event);
  }

  private getIcon(): string {
    return `
         <svg
         style="width: 16px; height: 16px; fill: #7F8C8D; margin-bottom: -2px;"
         viewBox="0 0 24 24"
         focusable="false"
         aria-hidden="true">
           <use xlink:href="#new-window"></use>
         </svg>
         <svg
         style="display: none"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink" hidden>
           <symbol id="new-window" viewBox="0 0 24 24">
              <g transform="scale(0.0234375 0.0234375)">
                <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298c0 46-40 86-86 86h-596c-48 0-86-40-86-86v-596c0-46 38-86 86-86h298v86h-298v596h596z"></path>
              </g>
          </symbol>
         </svg>
        `;
  }

}
