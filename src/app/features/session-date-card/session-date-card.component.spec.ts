import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDateCardComponent } from './session-date-card.component';

describe('SessionDateCardComponent', () => {
  let component: SessionDateCardComponent;
  let fixture: ComponentFixture<SessionDateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionDateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
