import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormationByIdComponent } from './page-formation-by-id.component';

describe('PageFormationByIdComponent', () => {
  let component: PageFormationByIdComponent;
  let fixture: ComponentFixture<PageFormationByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormationByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormationByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
