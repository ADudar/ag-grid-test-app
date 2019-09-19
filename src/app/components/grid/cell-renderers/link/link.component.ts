import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {Params} from '../../../../models/models';
import {VideoService} from '../../../../services/video.service';

@Component({
  selector: 'app-link-cell',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements ICellRendererAngularComp {
  params: Params;
  url: string;
  title: string;

  constructor(private service: VideoService) {}

  agInit(params): void {
    this.params = params;
    this.setUrl(this.params);
  }

  setUrl(params: Params): void {
    this.url = this.service.getVideoUrlById(params.data.videoId);
    this.title = params.value;
  }

  refresh(): boolean {
    this.setUrl(this.params);
    return true;
  }
}
