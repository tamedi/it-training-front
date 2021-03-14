import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormulaireInscriptionApprenantComponent } from './page-formulaire-inscription-apprenant.component';

describe('PageFormulaireInscriptionApprenantComponent', () => {
  let component: PageFormulaireInscriptionApprenantComponent;
  let fixture: ComponentFixture<PageFormulaireInscriptionApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormulaireInscriptionApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormulaireInscriptionApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
