import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxBigQuoteComponent } from './aux-big-quote.component';

describe('AuxBigQuoteComponent', () => {
  let component: AuxBigQuoteComponent;
  let fixture: ComponentFixture<AuxBigQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxBigQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxBigQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
