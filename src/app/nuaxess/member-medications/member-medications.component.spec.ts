import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMedicationsComponent } from './member-medications.component';

describe('MemberMedicationsComponent', () => {
  let component: MemberMedicationsComponent;
  let fixture: ComponentFixture<MemberMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
