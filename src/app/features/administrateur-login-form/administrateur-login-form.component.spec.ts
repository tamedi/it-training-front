import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurLoginFormComponent } from './administrateur-login-form.component';

describe('AdministrateurLoginFormComponent', () => {
  let component: AdministrateurLoginFormComponent;
  let fixture: ComponentFixture<AdministrateurLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrateurLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
