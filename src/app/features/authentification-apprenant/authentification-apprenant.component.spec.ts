import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationApprenantComponent } from './authentification-apprenant.component';

describe('AuthentificationApprenantComponent', () => {
  let component: AuthentificationApprenantComponent;
  let fixture: ComponentFixture<AuthentificationApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentificationApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
