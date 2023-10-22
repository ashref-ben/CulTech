import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationAddComponent } from './participation-add.component';

describe('ParticipationAddComponent', () => {
  let component: ParticipationAddComponent;
  let fixture: ComponentFixture<ParticipationAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipationAddComponent]
    });
    fixture = TestBed.createComponent(ParticipationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
