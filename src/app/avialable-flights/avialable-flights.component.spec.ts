import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvialableFlightsComponent } from './avialable-flights.component';

describe('AvialableFlightsComponent', () => {
  let component: AvialableFlightsComponent;
  let fixture: ComponentFixture<AvialableFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvialableFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvialableFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
