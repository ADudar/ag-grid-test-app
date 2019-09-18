import {Component} from '@angular/core';

import {Params} from '../models';

@Component({
  selector: 'app-count-status-bar',
  templateUrl: './count-status-bar.component.html',
  styleUrls: ['./count-status-bar.component.scss']
})
export class CountStatusBarComponent {

  private params: Params;
  count = 0;

  agInit(params: Params): void {
    this.params = params;

    this.params.api.addEventListener('gridReady', this.onGridReady.bind(this));
  }

  onGridReady(): void {
    this.count = (this.params.api.getModel() as any).rowsToDisplay.length;
  }
}
