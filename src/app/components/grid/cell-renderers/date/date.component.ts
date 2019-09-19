import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

/**
 * Date cell component for grid
 */
@Component({
  selector: 'app-date-cell',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements ICellRendererAngularComp {
  params: any;
  date: Date;

  agInit(params): void {
    this.params = params;
    this.setDate(params.value);
  }

  refresh(): boolean {
    this.setDate(this.params.value);
    return true;
  }

  private setDate(value: string): void {
    this.date = new Date(value);
  }
}
