import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultRadarComponent } from './consult-radar.component';

describe('ConsultRadarComponent', () => {
  let component: ConsultRadarComponent;
  let fixture: ComponentFixture<ConsultRadarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultRadarComponent]
    });
    fixture = TestBed.createComponent(ConsultRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
