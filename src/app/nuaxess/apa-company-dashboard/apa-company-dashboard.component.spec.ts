import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaCompanyDashboardComponent } from './apa-company-dashboard.component';

describe('ApaCompanyDashboardComponent', () => {
  let component: ApaCompanyDashboardComponent;
  let fixture: ComponentFixture<ApaCompanyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApaCompanyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaCompanyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
