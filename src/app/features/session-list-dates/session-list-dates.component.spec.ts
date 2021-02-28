import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListDatesComponent } from './session-list-dates.component';

describe('SessionListDatesComponent', () => {
  let component: SessionListDatesComponent;
  let fixture: ComponentFixture<SessionListDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionListDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
