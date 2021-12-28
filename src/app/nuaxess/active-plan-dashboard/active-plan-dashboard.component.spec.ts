import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePlanDashboardComponent } from './active-plan-dashboard.component';

describe('ActivePlanDashboardComponent', () => {
  let component: ActivePlanDashboardComponent;
  let fixture: ComponentFixture<ActivePlanDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePlanDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePlanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
