import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProgrammeUserComponent } from './display-programme-user.component';

describe('DisplayProgrammeUserComponent', () => {
  let component: DisplayProgrammeUserComponent;
  let fixture: ComponentFixture<DisplayProgrammeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProgrammeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayProgrammeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
