import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {Observable} from 'rxjs';
import {Item, SearchListResponse, ViewItem} from '../../models/models';
import {ColumnApi, GridApi, GridOptions} from 'ag-grid-community';
import {RecordsCountComponent} from './status-bars/records-count/records-count.component';
import {SelectedRecordsCountComponent} from './status-bars/selected-records-count/selected-records-count.component';
import {SelectionToggleComponent} from './status-bars/selection-toggle/selection-toggle.component';
import {CheckboxComponent} from './cell-renderers/checkbox/checkbox.component';
import {SearchListService} from '../../services/search-list.service';
import {map} from 'rxjs/operators';
import {selectionColumn} from './col-defs/selection-column';
import {thumbnailColumn} from './col-defs/thumbnail-column';
import {publishedAtColumn} from './col-defs/published-at-column';
import {titleColumn} from './col-defs/title-column';
import {descriptionColumn} from './col-defs/description-column';
import {VideoService} from '../../services/video.service';

/**
 * Represent grid component with it configuration
 */
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @ViewChild('agGrid', {static: true}) agGrid: AgGridAngular;

  /**
   * Grid data
   */
  rowData: Observable<ViewItem[]>;

  /**
   * Grid configuration
   */
  gridOptions: GridOptions = {
    paginationAutoPageSize: true,
    suppressCellSelection: true,
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
    },
    rowHeight: 90,
    columnDefs: [
      selectionColumn,
      thumbnailColumn,
      publishedAtColumn,
      titleColumn,
      descriptionColumn,
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
      countStatusBarComponent: RecordsCountComponent,
      countSelectedRecordsComponent: SelectedRecordsCountComponent,
      selectionToggleComponent: SelectionToggleComponent,
      agColumnHeader: CheckboxComponent,
    },
    rowSelection: 'multiple',
    popupParent: document.querySelector('body'),
    getContextMenuItems: (params) => this.getContextMenuItems(params),
    context: this
  };

  constructor(private searchListService: SearchListService,
              private videoService: VideoService) {
  }

  /**
   * Get data to display from response
   * @param list
   */
  static mapVideoToView(list: SearchListResponse): ViewItem[] {
    return list.items.map((item: Item) => {
      return new ViewItem(
        {
          title: item.snippet.title,
          publishedAt: item.snippet.publishedAt,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.default.url,
          videoId: item.id.videoId
        }
      );
    });
  }

  /**
   * Icon for conext menu 'open in new tab'
   */
  static getTabIcon(): string {
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
                <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810
                810v-298h86v298c0 46-40 86-86 86h-596c-48 0-86-40-86-86v-596c0-46 38-86 86-86h298v86h-298v596h596z"></path>
              </g>
          </symbol>
         </svg>
        `;
  }

  ngOnInit(): void {
    this.rowData = this.searchListService.getVideos('john')
      .pipe(
        map(GridComponent.mapVideoToView)
      );
  }

  /**
   * Build custom context menu
   * @param params
   */
  getContextMenuItems(params): any[] {
    console.log(params);
    const openInNewTabAction = () => {
      window.open(this.videoService.getVideoUrlById(params.node.data.videoId), '_blank');
    };
    const openInNewTabItem = {
      name: 'Open in new tab',
      shortcut: 'Ctrl+Shift+Click',
      icon: GridComponent.getTabIcon(),
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

  /**
   * Fit all column to screen width
   */
  sizeToFit(): void {
    this.agGrid.api.sizeColumnsToFit();
  }

  /**
   * Grid ready event
   * @param event
   */
  onGridReady(event: { api: GridApi, columnApi: ColumnApi, type: string }): void {
    this.sizeToFit();
  }
}
