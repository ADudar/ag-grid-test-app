import {Component, ElementRef, ViewChild} from '@angular/core';
import {Params} from '../../../../models/models';

/**
 * Header checkbox component for grid
 */
@Component({
  selector: 'app-header-checkbox-selection',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  params: Params;
  ascSort: string;
  descSort: string;
  noSort: string;
  selectAll = false;
  @ViewChild('menuButton', {read: ElementRef, static: false}) public menuButton;

  get isCheckboxVisible(): boolean {
    const {headerComponentParams} = this.params.column.colDef;
    if (typeof headerComponentParams === 'function') {
      return headerComponentParams(this.params);
    }
    return false;
  }

  agInit(params: Params): void {
    this.params = params;
    params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    params.api.addEventListener('selectionChanged', this.onSelectionChanged.bind(this));
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

  /**
   * Update header checkbox state
   */
  onSelectionChanged(): void {
    this.selectAll = this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount();
  }

  onSortRequested(order, event): void {
    this.params.setSort(order, event.shiftKey);
  }

  onChange(event): void {
    event.preventDefault();
    if (this.selectAll) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }
}
