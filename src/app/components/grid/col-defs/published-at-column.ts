import {DateComponent} from '../cell-renderers/date/date.component';

/**
 * Published at column configuration
 */
export const publishedAtColumn = {
  headerName: 'Published on',
  field: 'publishedAt',
  sortable: true,
  filter: true,
  suppressSizeToFit: true,
  width: 200,
  cellRendererFramework: DateComponent,
};
