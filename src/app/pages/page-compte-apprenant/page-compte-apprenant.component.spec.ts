import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompteApprenantComponent } from './page-compte-apprenant.component';

describe('PageCompteApprenantComponent', () => {
  let component: PageCompteApprenantComponent;
  let fixture: ComponentFixture<PageCompteApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCompteApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompteApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
