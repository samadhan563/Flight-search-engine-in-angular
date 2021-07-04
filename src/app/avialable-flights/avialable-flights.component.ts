import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avialable-flights',
  templateUrl: './avialable-flights.component.html',
  styleUrls: ['./avialable-flights.component.css'],
})
export class AvialableFlightsComponent implements OnInit {
  @Input('filteredFlightData') public filteredFlightData;
  @Input('returnFlightData') public returnFlightData;
  @Input('search') public search;
  @Input('searchOn') public searchOn;
  @Input('returnStatus') public returnStatus;

  public forwardArrow = 'assets/Images/Forward.svg';

  constructor() {}

  ngOnInit(): void {
    this.forwardArrow = 'assets/Images/Forward.svg';
  }
}
