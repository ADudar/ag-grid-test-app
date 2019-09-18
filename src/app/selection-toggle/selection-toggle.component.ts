import {Component} from '@angular/core';

@Component({
  selector: 'app-selection-toggle',
  templateUrl: './selection-toggle.component.html',
  styleUrls: ['./selection-toggle.component.scss']
})
export class SelectionToggleComponent {

  private params: any; // TODO: add type

  agInit(params: any): void {
    this.params = params;
  }

  changeCheckoxVisibility() {
    const currentVisibility = this.params.columnApi.getColumn('selection').visible;
    this.params.columnApi.setColumnVisible('selection', !currentVisibility);
    if (currentVisibility) {
      this.params.api.deselectAll();
    }
  }
}
