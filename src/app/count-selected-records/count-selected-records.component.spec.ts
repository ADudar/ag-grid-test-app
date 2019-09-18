import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CountSelectedRecordsComponent} from './count-selected-records.component';

describe('CountSelectedRecordsComponent', () => {
  let component: CountSelectedRecordsComponent;
  let fixture: ComponentFixture<CountSelectedRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountSelectedRecordsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountSelectedRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
