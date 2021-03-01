import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNavigationDashboardComponent } from './item-navigation-dashboard.component';

describe('ItemNavigationDashboardComponent', () => {
  let component: ItemNavigationDashboardComponent;
  let fixture: ComponentFixture<ItemNavigationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNavigationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNavigationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
