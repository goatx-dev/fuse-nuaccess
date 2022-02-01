import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaPlanListComponent } from './apa-plan-list.component';

describe('ApaPlanListComponent', () => {
  let component: ApaPlanListComponent;
  let fixture: ComponentFixture<ApaPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApaPlanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
