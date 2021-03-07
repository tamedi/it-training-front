import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAdministrateurFormComponent } from './ajout-administrateur-form.component';

describe('AjoutAdministrateurFormComponent', () => {
  let component: AjoutAdministrateurFormComponent;
  let fixture: ComponentFixture<AjoutAdministrateurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAdministrateurFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAdministrateurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
