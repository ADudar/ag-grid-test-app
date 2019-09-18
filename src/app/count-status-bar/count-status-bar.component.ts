import {Component} from '@angular/core';

@Component({
  selector: 'app-count-status-bar',
  templateUrl: './count-status-bar.component.html',
  styleUrls: ['./count-status-bar.component.scss']
})
export class CountStatusBarComponent {

  private params: any; // TODO: add type
  count = 0;

  agInit(params: any): void {
    this.params = params;

    this.params.api.addEventListener('gridReady', this.onGridReady.bind(this));
  }

  onGridReady() {
    this.count = this.params.api.getModel().rowsToDisplay.length;
  }
}
