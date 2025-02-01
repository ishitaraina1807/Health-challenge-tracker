import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserChartsComponent } from './user-charts.component';
import { Chart } from 'chart.js';

describe('UserChartsComponent', () => {
  let component: UserChartsComponent;
  let fixture: ComponentFixture<UserChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserChartsComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (component.chart) {
      component.chart.destroy();
    }
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the chart on ngOnInit', () => {
    component.ngOnInit();
    expect(component.chart).toBeDefined();
  });

  it('should update the chart when selectedUser changes', () => {
    const mockUser = {
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 15 },
      ]
    };
    component.selectedUser = mockUser;
    component.ngOnChanges();
    expect(component.config.data.labels).toEqual(['Running', 'Cycling']);
    expect(component.config.data.datasets[0].data).toEqual([30, 15]);
  });

  it('should clean up on ngOnDestroy', () => {
    spyOn(window, 'removeEventListener');
    component.ngOnDestroy();
    expect(window.removeEventListener).toHaveBeenCalledWith('resize', jasmine.any(Function));
    expect(component.chart).toBeUndefined();
  });
});
