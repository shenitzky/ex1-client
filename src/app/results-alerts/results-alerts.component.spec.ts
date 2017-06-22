import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsAlertsComponent } from './results-alerts.component';

describe('ResultsAlertsComponent', () => {
  let component: ResultsAlertsComponent;
  let fixture: ComponentFixture<ResultsAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
