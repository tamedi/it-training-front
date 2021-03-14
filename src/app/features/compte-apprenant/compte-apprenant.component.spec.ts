import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteApprenantComponent } from './compte-apprenant.component';

describe('CompteApprenantComponent', () => {
  let component: CompteApprenantComponent;
  let fixture: ComponentFixture<CompteApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
