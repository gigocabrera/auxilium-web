import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxContactFormComponent } from './aux-contact-form.component';

describe('AuxContactFormComponent', () => {
  let component: AuxContactFormComponent;
  let fixture: ComponentFixture<AuxContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
