import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxFooterComponent } from './aux-footer.component';

describe('AuxFooterComponent', () => {
  let component: AuxFooterComponent;
  let fixture: ComponentFixture<AuxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
