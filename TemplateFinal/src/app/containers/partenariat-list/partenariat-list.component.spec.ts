import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenariatListComponent } from './partenariat-list.component';

describe('PartenariatListComponent', () => {
  let component: PartenariatListComponent;
  let fixture: ComponentFixture<PartenariatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartenariatListComponent]
    });
    fixture = TestBed.createComponent(PartenariatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
