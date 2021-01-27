import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxHomeComponent } from './aux-home.component';

describe('AuxHomeComponent', () => {
  let component: AuxHomeComponent;
  let fixture: ComponentFixture<AuxHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
