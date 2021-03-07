import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateursListComponent } from './administrateurs-list.component';

describe('AdministrateursListComponent', () => {
  let component: AdministrateursListComponent;
  let fixture: ComponentFixture<AdministrateursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrateursListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
