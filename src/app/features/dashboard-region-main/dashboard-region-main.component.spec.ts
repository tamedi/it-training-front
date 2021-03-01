import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRegionMainComponent } from './dashboard-region-main.component';

describe('DashboardRegionMainComponent', () => {
  let component: DashboardRegionMainComponent;
  let fixture: ComponentFixture<DashboardRegionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRegionMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRegionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
