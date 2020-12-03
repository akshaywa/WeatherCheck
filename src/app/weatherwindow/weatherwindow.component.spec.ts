import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WeatherwindowComponent } from './weatherwindow.component';

describe('WeatherwindowComponent', () => {
  let component: WeatherwindowComponent;
  let fixture: ComponentFixture<WeatherwindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
