import {Component} from '@angular/core';

import {Params} from '../../../../models/models';

/**
 * Panel component selected records for grid
 */
@Component({
  selector: 'app-selected-records-count',
  templateUrl: './selected-records-count.component.html',
  styleUrls: ['./selected-records-count.component.scss']
})
export class SelectedRecordsCountComponent {

  count = 0;
  private params: Params;

  agInit(params: Params): void {
    this.params = params;

    this.params.api.addEventListener('selectionChanged', this.onSelectionChange.bind(this));
  }

  /**
   * Recalculate selected rows on selection change
   */
  onSelectionChange(): void {
    this.count = this.params.api.getSelectedRows().length;
  }
}
