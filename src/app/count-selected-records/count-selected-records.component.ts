import {Component} from '@angular/core';

@Component({
  selector: 'app-count-selected-records',
  templateUrl: './count-selected-records.component.html',
  styleUrls: ['./count-selected-records.component.scss']
})
export class CountSelectedRecordsComponent {

  count: null;
  private params: any; // TODO: add type

  agInit(params: any): void {
    this.params = params;

    this.params.api.addEventListener('selectionChanged', this.onSelectionChange.bind(this));
  }

  onSelectionChange() {
    this.count = this.params.api.getSelectedRows().length;
  }
}
