import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectedRecordsCountComponent} from './selected-records-count.component';

describe('SelectedRecordsCountComponent', () => {
  let component: SelectedRecordsCountComponent;
  let fixture: ComponentFixture<SelectedRecordsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedRecordsCountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRecordsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
