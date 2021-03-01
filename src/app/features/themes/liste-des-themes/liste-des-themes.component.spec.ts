import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesThemesComponent } from './liste-des-themes.component';

describe('ListeDesThemesComponent', () => {
  let component: ListeDesThemesComponent;
  let fixture: ComponentFixture<ListeDesThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
