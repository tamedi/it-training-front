import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormationListeComponent } from './page-formation-liste.component';

describe('PageFormationListeComponent', () => {
  let component: PageFormationListeComponent;
  let fixture: ComponentFixture<PageFormationListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormationListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormationListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
