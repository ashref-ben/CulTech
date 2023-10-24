import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgrammeEchangeComponent } from './add-programme-echange.component';

describe('AddProgrammeEchangeComponent', () => {
  let component: AddProgrammeEchangeComponent;
  let fixture: ComponentFixture<AddProgrammeEchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProgrammeEchangeComponent]
    });
    fixture = TestBed.createComponent(AddProgrammeEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
