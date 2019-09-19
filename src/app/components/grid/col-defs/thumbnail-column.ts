import {ImageComponent} from '../cell-renderers/image/image.component';

export const thumbnailColumn = {
  headerName: '',
  field: 'thumbnail',
  sortable: false,
  filter: true,
  suppressSizeToFit: true,
  width: 150,
  cellRendererFramework: ImageComponent,
};
