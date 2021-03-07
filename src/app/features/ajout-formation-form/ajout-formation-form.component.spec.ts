import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFormationFormComponent } from './ajout-formation-form.component';

describe('AjoutFormationFormComponent', () => {
  let component: AjoutFormationFormComponent;
  let fixture: ComponentFixture<AjoutFormationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFormationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
