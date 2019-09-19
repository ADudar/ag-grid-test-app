import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GridComponent} from './grid.component';
import {SearchListService} from '../../services/search-list.service';
import {VideoService} from '../../services/video.service';
import {of} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import {RecordsCountComponent} from './status-bars/records-count/records-count.component';
import {SelectedRecordsCountComponent} from './status-bars/selected-records-count/selected-records-count.component';
import {SelectionToggleComponent} from './status-bars/selection-toggle/selection-toggle.component';
import {CheckboxComponent} from './cell-renderers/checkbox/checkbox.component';
import {LinkComponent} from './cell-renderers/link/link.component';
import {DateComponent} from './cell-renderers/date/date.component';
import {ImageComponent} from './cell-renderers/image/image.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridComponent,
        RecordsCountComponent,
        SelectedRecordsCountComponent,
        SelectionToggleComponent,
        CheckboxComponent,
        LinkComponent,
        DateComponent,
        ImageComponent],
      providers: [
        {
          provide: SearchListService,
          useValue: {getVideos: () => of()}
        },
        {
          provide: VideoService,
          useValue: {}
        }
      ],
      imports: [
        FormsModule,
        AgGridModule.withComponents([
          RecordsCountComponent,
          SelectedRecordsCountComponent,
          SelectionToggleComponent,
          CheckboxComponent,
          LinkComponent,
          DateComponent,
          ImageComponent])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
