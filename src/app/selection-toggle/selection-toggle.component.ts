import {Component} from '@angular/core';

import {Params} from '../models';

@Component({
  selector: 'app-selection-toggle',
  templateUrl: './selection-toggle.component.html',
  styleUrls: ['./selection-toggle.component.scss']
})
export class SelectionToggleComponent {

  private params: Params;

  agInit(params: Params): void {
    this.params = params;
  }

  changeCheckoxVisibility(): void {
    const currentVisibility = (this.params.columnApi.getColumn('selection') as any).visible;
    this.params.columnApi.setColumnVisible('selection', !currentVisibility);
    if (currentVisibility) {
      this.params.api.deselectAll();
    }
  }
}
