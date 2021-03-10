import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireInscriptionApprenantComponent } from './formulaire-inscription-apprenant.component';

describe('FormulaireInscriptionApprenantComponent', () => {
  let component: FormulaireInscriptionApprenantComponent;
  let fixture: ComponentFixture<FormulaireInscriptionApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireInscriptionApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireInscriptionApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
