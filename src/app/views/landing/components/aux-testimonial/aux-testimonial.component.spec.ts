import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxTestimonialComponent } from './aux-testimonial.component';

describe('AuxTestimonialComponent', () => {
  let component: AuxTestimonialComponent;
  let fixture: ComponentFixture<AuxTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
