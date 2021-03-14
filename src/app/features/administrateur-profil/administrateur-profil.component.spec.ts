import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurProfilComponent } from './administrateur-profil.component';

describe('AdministrateurProfilComponent', () => {
  let component: AdministrateurProfilComponent;
  let fixture: ComponentFixture<AdministrateurProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrateurProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
