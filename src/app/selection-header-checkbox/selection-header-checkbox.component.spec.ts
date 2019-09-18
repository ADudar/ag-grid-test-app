import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectionHeaderCheckboxComponent} from './selection-header-checkbox.component';

describe('SelectionHeaderCheckboxComponent', () => {
  let component: SelectionHeaderCheckboxComponent;
  let fixture: ComponentFixture<SelectionHeaderCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionHeaderCheckboxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionHeaderCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
