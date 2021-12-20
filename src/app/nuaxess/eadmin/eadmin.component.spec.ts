import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EadminComponent } from './eadmin.component';

describe('EadminComponent', () => {
  let component: EadminComponent;
  let fixture: ComponentFixture<EadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
