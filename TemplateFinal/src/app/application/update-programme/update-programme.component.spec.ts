import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProgrammeComponent } from './update-programme.component';

describe('UpdateProgrammeComponent', () => {
  let component: UpdateProgrammeComponent;
  let fixture: ComponentFixture<UpdateProgrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProgrammeComponent]
    });
    fixture = TestBed.createComponent(UpdateProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
