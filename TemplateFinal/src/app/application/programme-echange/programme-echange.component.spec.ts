import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeEchangeComponent } from './programme-echange.component';

describe('ProgrammeEchangeComponent', () => {
  let component: ProgrammeEchangeComponent;
  let fixture: ComponentFixture<ProgrammeEchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammeEchangeComponent]
    });
    fixture = TestBed.createComponent(ProgrammeEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
