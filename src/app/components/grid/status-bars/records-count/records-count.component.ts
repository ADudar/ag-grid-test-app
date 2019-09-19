import {Component} from '@angular/core';

import {Params} from '../../../../models/models';

/**
 * Panel component total records count for grid
 */
@Component({
  selector: 'app-records-count',
  templateUrl: './records-count.component.html',
  styleUrls: ['./records-count.component.scss']
})
export class RecordsCountComponent {

  private params: Params;
  count = 0;

  agInit(params: Params): void {
    this.params = params;
    this.params.api.addEventListener('modelUpdated', this.onModelUpdate.bind(this));
  }

  /**
   * Get total row count
   */
  onModelUpdate(): void {
    this.count = this.params.api.getModel().getRowCount();
  }
}
