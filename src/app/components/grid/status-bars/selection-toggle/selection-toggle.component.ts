import {Component} from '@angular/core';
import {Params} from '../../../../models/models';

@Component({
  selector: 'app-selection-toggle',
  templateUrl: './selection-toggle.component.html',
  styleUrls: ['./selection-toggle.component.scss']
})
export class SelectionToggleComponent {

  private params: Params;

  /**
   * Can restore selected nodes
   * after triggering 'selection' modes
   */
  selectedNodes = [];

  agInit(params: Params): void {
    this.params = params;
  }

  /**
   * Show or hide 'selection' column
   * Store state of selected nodes
   * @param event
   */
  toggleSelectionMode(event): void {
    event.preventDefault();
    const visible = this.getCurrentVisibility();
    if (visible) {
      this.selectedNodes = this.params.api.getSelectedNodes();
      this.params.api.deselectAll();
    } else {
      this.selectedNodes.forEach(node => node.setSelected(true));
    }
    this.setColumnVisibility('selection', !visible);
  }

  /**
   * Get visibility of 'selection' column
   */
  private getCurrentVisibility(): boolean {
    return this.params.columnApi.getColumn('selection').isVisible();
  }

  /**
   * Set visibility of column
   * @param columnKey
   * @param visible
   */
  private setColumnVisibility(columnKey: string, visible: boolean): void {
    this.params.columnApi.setColumnVisible(columnKey, visible);
  }
}
