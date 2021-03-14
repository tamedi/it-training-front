import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSessionsDashboardComponent } from './list-sessions-dashboard.component';

describe('ListSessionsDashboardComponent', () => {
  let component: ListSessionsDashboardComponent;
  let fixture: ComponentFixture<ListSessionsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSessionsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSessionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
