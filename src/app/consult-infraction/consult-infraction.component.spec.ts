import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultInfractionComponent } from './consult-infraction.component';

describe('ConsultInfractionComponent', () => {
  let component: ConsultInfractionComponent;
  let fixture: ComponentFixture<ConsultInfractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultInfractionComponent]
    });
    fixture = TestBed.createComponent(ConsultInfractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
