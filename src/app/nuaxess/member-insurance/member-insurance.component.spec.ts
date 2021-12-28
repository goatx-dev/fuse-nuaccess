import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInsuranceComponent } from './member-insurance.component';

describe('MemberInsuranceComponent', () => {
  let component: MemberInsuranceComponent;
  let fixture: ComponentFixture<MemberInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
