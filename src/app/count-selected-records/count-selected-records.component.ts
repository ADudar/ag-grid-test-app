import {Component} from '@angular/core';

import {Params} from '../models';

@Component({
  selector: 'app-count-selected-records',
  templateUrl: './count-selected-records.component.html',
  styleUrls: ['./count-selected-records.component.scss']
})
export class CountSelectedRecordsComponent {

  count = 0;
  private params: Params;

  agInit(params: Params): void {
    this.params = params;

    this.params.api.addEventListener('selectionChanged', this.onSelectionChange.bind(this));
  }

  onSelectionChange(): void {
    this.count = this.params.api.getSelectedRows().length;
  }
}
