import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthentificationApprenantComponent } from './page-authentification-apprenant.component';

describe('PageAuthentificationApprenantComponent', () => {
  let component: PageAuthentificationApprenantComponent;
  let fixture: ComponentFixture<PageAuthentificationApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAuthentificationApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthentificationApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
