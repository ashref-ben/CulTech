import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProgrammeUserComponent } from './display-programme-user.component';

describe('DisplayProgrammeUserComponent', () => {
  let component: DisplayProgrammeUserComponent;
  let fixture: ComponentFixture<DisplayProgrammeUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayProgrammeUserComponent]
    });
    fixture = TestBed.createComponent(DisplayProgrammeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
