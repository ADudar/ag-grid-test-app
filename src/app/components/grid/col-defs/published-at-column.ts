import {DateComponent} from '../cell-renderers/date/date.component';

export const publishedAtColumn = {
  headerName: 'Published on',
  field: 'publishedAt',
  sortable: true,
  filter: true,
  suppressSizeToFit: true,
  width: 200,
  cellRendererFramework: DateComponent,
};
