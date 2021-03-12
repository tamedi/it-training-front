import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosCentresComponent } from './nos-centres.component';

describe('NosCentresComponent', () => {
  let component: NosCentresComponent;
  let fixture: ComponentFixture<NosCentresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosCentresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
