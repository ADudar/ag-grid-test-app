export const selectionColumn = {
  headerName: '',
  field: 'selection',
  checkboxSelection: true,
  sortable: false,
  filter: false,
  suppressMenu: true,
  width: 40,
  suppressSizeToFit: true,
  hide: true,
  headerComponentParams: (params) => {
    const firstColumnIndex = 0;
    const displayedColumns = params.columnApi.getAllDisplayedColumns();
    return displayedColumns[firstColumnIndex] === params.column;
  },
};

