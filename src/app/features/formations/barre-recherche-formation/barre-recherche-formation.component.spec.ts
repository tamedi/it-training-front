import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreRechercheFormationComponent } from './barre-recherche-formation.component';

describe('BarreRechercheFormationComponent', () => {
  let component: BarreRechercheFormationComponent;
  let fixture: ComponentFixture<BarreRechercheFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreRechercheFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreRechercheFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
