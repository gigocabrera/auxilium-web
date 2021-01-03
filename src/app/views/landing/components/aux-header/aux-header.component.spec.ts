import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxHeaderComponent } from './aux-header.component';

describe('AuxHeaderComponent', () => {
  let component: AuxHeaderComponent;
  let fixture: ComponentFixture<AuxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
