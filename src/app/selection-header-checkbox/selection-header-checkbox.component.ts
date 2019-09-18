import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-selection-header-checkbox',
  templateUrl: './selection-header-checkbox.component.html',
  styleUrls: ['./selection-header-checkbox.component.scss']
})
export class SelectionHeaderCheckboxComponent {

  params: any; // TODO: add type
  ascSort: string;
  descSort: string;
  noSort: string;
  selectAll = false;
  @ViewChild('menuButton', {read: ElementRef, static: false}) public menuButton;

  get isCheckboxVisible(): boolean {
    const {customHeaderCheckboxSelection} = this.params.column.colDef;
    if (typeof customHeaderCheckboxSelection === 'function') {
      return customHeaderCheckboxSelection(this.params);
    }
    return false;
  }

  agInit(params): void {
    this.params = params;
    this.params.api.selectionHeaderCheckboxComponent = this;

    params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    params.api.addEventListener('selectionChanged', this.onSelectionChanged.bind(this));
    this.onSortChanged();
  }

  onMenuClicked() {
    this.params.showColumnMenu(this.menuButton.nativeElement);
  }

  onSortChanged() {
    this.ascSort = this.descSort = this.noSort = 'inactive';
    if (this.params.column.isSortAscending()) {
      this.ascSort = 'active';
    } else if (this.params.column.isSortDescending()) {
      this.descSort = 'active';
    } else {
      this.noSort = 'active';
    }
  }

  onSelectionChanged() {
    this.selectAll = this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount();
  }

  onSortRequested(order, event) {
    this.params.setSort(order, event.shiftKey);
  }

  onChange() {
    if (this.selectAll) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }
}
