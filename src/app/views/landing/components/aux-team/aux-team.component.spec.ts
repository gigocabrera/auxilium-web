import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxTeamComponent } from './aux-team.component';

describe('AuxTeamComponent', () => {
  let component: AuxTeamComponent;
  let fixture: ComponentFixture<AuxTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
