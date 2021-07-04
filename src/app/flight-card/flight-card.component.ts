import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent implements OnInit {
  @Input('filteredFlightData') public filteredFlightData;
  @Input('search') public search;
  @Input('searchOn') public searchOn;
  constructor() {}

  ngOnInit(): void {}
}
