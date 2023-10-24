import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplicationComponent } from './update-application.component';

describe('UpdateApplicationComponent', () => {
  let component: UpdateApplicationComponent;
  let fixture: ComponentFixture<UpdateApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateApplicationComponent]
    });
    fixture = TestBed.createComponent(UpdateApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
