import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxTechnologiesComponent } from './aux-technologies.component';

describe('AuxTechnologiesComponent', () => {
  let component: AuxTechnologiesComponent;
  let fixture: ComponentFixture<AuxTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
