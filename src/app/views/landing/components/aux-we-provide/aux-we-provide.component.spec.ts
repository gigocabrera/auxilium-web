import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxWeProvideComponent } from './aux-we-provide.component';

describe('AuxWeProvideComponent', () => {
  let component: AuxWeProvideComponent;
  let fixture: ComponentFixture<AuxWeProvideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxWeProvideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxWeProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
