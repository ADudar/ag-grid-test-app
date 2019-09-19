import {LinkComponent} from '../cell-renderers/link/link.component';

/**
 * Title column configuration
 */
export const titleColumn = {
  headerName: 'Video Title',
  field: 'title',
  sortable: true,
  filter: true,
  width: 500,
  suppressSizeToFit: true,
  cellRendererFramework: LinkComponent,
};
