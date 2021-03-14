import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuppressionElementComponent } from './dialog-suppression-element.component';

describe('DialogSuppressionElementComponent', () => {
  let component: DialogSuppressionElementComponent;
  let fixture: ComponentFixture<DialogSuppressionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSuppressionElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSuppressionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
