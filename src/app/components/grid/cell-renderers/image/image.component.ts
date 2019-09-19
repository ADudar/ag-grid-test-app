import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-image-cell',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent  implements ICellRendererAngularComp {
  params: any;
  url: string;

  agInit(params): void {
    this.params = params;
    this.setUrl(params.value);
  }

  refresh(): boolean {
    this.setUrl(this.params.value);
    return true;
  }

  private setUrl(value: string): void {
    this.url = value;
  }
}
