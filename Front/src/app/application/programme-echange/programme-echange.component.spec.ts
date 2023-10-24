import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeEchangeComponent } from './programme-echange.component';

describe('ProgrammeEchangeComponent', () => {
  let component: ProgrammeEchangeComponent;
  let fixture: ComponentFixture<ProgrammeEchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeEchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammeEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
