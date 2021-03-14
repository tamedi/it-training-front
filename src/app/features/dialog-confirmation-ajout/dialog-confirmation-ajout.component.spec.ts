import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationAjoutComponent } from './dialog-confirmation-ajout.component';

describe('DialogConfirmationAjoutComponent', () => {
  let component: DialogConfirmationAjoutComponent;
  let fixture: ComponentFixture<DialogConfirmationAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmationAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmationAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
