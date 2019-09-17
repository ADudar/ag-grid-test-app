import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CountStatusBarComponent} from './count-status-bar.component';

describe('CountStatusBarComponent', () => {
  let component: CountStatusBarComponent;
  let fixture: ComponentFixture<CountStatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountStatusBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
