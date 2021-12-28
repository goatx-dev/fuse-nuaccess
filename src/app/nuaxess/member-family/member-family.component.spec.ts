import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFamilyComponent } from './member-family.component';

describe('MemberFamilyComponent', () => {
  let component: MemberFamilyComponent;
  let fixture: ComponentFixture<MemberFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
