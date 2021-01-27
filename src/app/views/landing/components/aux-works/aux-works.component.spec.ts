import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxWorksComponent } from './aux-works.component';

describe('AuxWorksComponent', () => {
  let component: AuxWorksComponent;
  let fixture: ComponentFixture<AuxWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
