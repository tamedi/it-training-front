import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSessionFormComponent } from './ajout-session-form.component';

describe('AjoutSessionFormComponent', () => {
  let component: AjoutSessionFormComponent;
  let fixture: ComponentFixture<AjoutSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
