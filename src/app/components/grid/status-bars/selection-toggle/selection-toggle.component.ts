import {Component} from '@angular/core';
import {Params} from '../../../../models/models';

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

  toggleSelectionMode(event): void {
    event.preventDefault();
    const visible = this.getCurrentVisibility();
    if (visible) {
    this.params.api.deselectAll();
    }
    this.setColumnVisibility('selection', !visible);
  }

  private getCurrentVisibility(): boolean {
    return this.params.columnApi.getColumn('selection').isVisible();
  }

  private setColumnVisibility(columnKey: string, visible: boolean): void {
    this.params.columnApi.setColumnVisible(columnKey, visible);
  }
}
