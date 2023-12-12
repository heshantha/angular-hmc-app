import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarChartComponent } from './app-bar-chart.component';

describe('AppBarChartComponent', () => {
  let component: AppBarChartComponent;
  let fixture: ComponentFixture<AppBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
