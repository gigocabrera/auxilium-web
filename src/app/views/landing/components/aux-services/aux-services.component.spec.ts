import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxServicesComponent } from './aux-services.component';

describe('AuxServicesComponent', () => {
  let component: AuxServicesComponent;
  let fixture: ComponentFixture<AuxServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
