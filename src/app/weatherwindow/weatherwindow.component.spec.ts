import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherwindowComponent } from './weatherwindow.component';

describe('WeatherwindowComponent', () => {
  let component: WeatherwindowComponent;
  let fixture: ComponentFixture<WeatherwindowComponent>;

  beforeEach(async(() => {
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
