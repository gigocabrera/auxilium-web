import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxAboutComponent } from './aux-about.component';

describe('AuxAboutComponent', () => {
  let component: AuxAboutComponent;
  let fixture: ComponentFixture<AuxAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
