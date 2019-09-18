import {Component, ElementRef, ViewChild} from '@angular/core';
import {Params} from '../models';

@Component({
  selector: 'app-selection-header-checkbox',
  templateUrl: './selection-header-checkbox.component.html',
  styleUrls: ['./selection-header-checkbox.component.scss']
})
export class SelectionHeaderCheckboxComponent {

  params: Params;
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

  agInit(params: Params): void {
    this.params = params;
    params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    params.api.addEventListener('selectionChanged', this.onSelectionChanged.bind(this));
    this.onSortChanged();
    this.onSelectionChanged();
  }

  onMenuClicked(): void {
    this.params.showColumnMenu(this.menuButton.nativeElement);
  }

  onSortChanged(): void {
    this.ascSort = this.descSort = this.noSort = 'inactive';
    if (this.params.column.isSortAscending()) {
      this.ascSort = 'active';
    } else if (this.params.column.isSortDescending()) {
      this.descSort = 'active';
    } else {
      this.noSort = 'active';
    }
  }

  onSelectionChanged(): void {
    this.selectAll = this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount();
  }

  onSortRequested(order, event): void {
    this.params.setSort(order, event.shiftKey);
  }

  onChange(): void {
    if (this.selectAll) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }
}
