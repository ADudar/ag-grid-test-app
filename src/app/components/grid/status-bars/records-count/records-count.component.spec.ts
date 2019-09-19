import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecordsCountComponent} from './records-count.component';

describe('RecordsCountComponent', () => {
  let component: RecordsCountComponent;
  let fixture: ComponentFixture<RecordsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecordsCountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
