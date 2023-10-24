import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenariataddComponent } from './partenariatadd.component';

describe('PartenariataddComponent', () => {
  let component: PartenariataddComponent;
  let fixture: ComponentFixture<PartenariataddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartenariataddComponent]
    });
    fixture = TestBed.createComponent(PartenariataddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
