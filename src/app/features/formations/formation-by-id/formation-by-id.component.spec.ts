import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationByIdComponent } from './formation-by-id.component';

describe('FormationByIdComponent', () => {
  let component: FormationByIdComponent;
  let fixture: ComponentFixture<FormationByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
