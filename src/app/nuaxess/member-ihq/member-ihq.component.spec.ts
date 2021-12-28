import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberIHQComponent } from './member-ihq.component';

describe('MemberIHQComponent', () => {
  let component: MemberIHQComponent;
  let fixture: ComponentFixture<MemberIHQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberIHQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberIHQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
