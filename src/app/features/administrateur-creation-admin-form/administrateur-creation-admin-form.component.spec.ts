import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurCreationAdminFormComponent } from './administrateur-creation-admin-form.component';

describe('AdministrateurCreationAdminFormComponent', () => {
  let component: AdministrateurCreationAdminFormComponent;
  let fixture: ComponentFixture<AdministrateurCreationAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrateurCreationAdminFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurCreationAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
