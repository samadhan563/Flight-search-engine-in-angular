import { FlightServiceService } from './../flight-service.service';
import { Search } from './../search';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  //   template:`<div class="row mt-2">
  //   <div class="col-md-4 ml-4 mt-1">
  //       <div class="card mt-4">
  //           <div class="card-body">
  //               <div class="card mt-2">
  //                   <div class="card-body">
  //                       <div class="btn-group  d-flex justify-content-center mt-2">
  //                           <button class="btn block btn-info outline" (click)="flightReturn(false)">One Way</button>
  //                           <button class="btn block btn-info outline" (click)="flightReturn(true)">Return</button>
  //                       </div>
  //                       {{search|json}}
  //                       <input class="input mt-4" required [class.is-invalid]="originName.invalid&& originName.touched"
  //                           #originName="ngModel" name="originName" [(ngModel)]="search.originName"
  //                           placeholder="Enter origin city">
  //                       <input class="input mt-4" required
  //                           [class.is-invalid]="destinationName.invalid&& destinationName.touched"
  //                           #destinationName="ngModel" name="destinationName" [(ngModel)]="search.destinationName"
  //                           placeholder="Enter destination name ">
  //                       <input class="input mt-4" required
  //                           [class.is-invalid]="departureDate.invalid&& departureDate.touched" #departureDate="ngModel"
  //                           name="departureDate" (blur)="onBlurEvent($event)" (focus)="onFocusEvent($event)"
  //                           [(ngModel)]="search.departureDate" placeholder="Enter departure date">
  //                       <div *ngIf="returnStatus">
  //                           <input class="input mt-4" required
  //                               [class.is-invalid]="returnDate.invalid&& returnDate.touched" #returnDate="ngModel"
  //                               name="returnDate" [(ngModel)]="search.returnDate" placeholder="Enter return date"
  //                               (blur)="onBlurEvent($event)" (focus)="onFocusEvent($event)">
  //                       </div>
  //                       <div class="d-flex  mt-4 block">
  //                           <button class="btn btn-secondary outline" (click)="onChangePassenger('less')">-</button>
  //                           <div className="text-muted"> {{search.passenger}} passengers
  //                           </div>
  //                           <button class="btn btn-secondary outline" (click)="onChangePassenger('add')">+</button>
  //                       </div>
  //                       <button class="btn btn-info outline block mt-4" (click)="onSearch()">Search</button>
  //                   </div>
  //               </div>
  //               <div class="card mt-4">
  //                   <div class="card-body">
  //                       <div class="h3 mb-2 ml-2 mt-2 text-center">
  //                           Refine flight search
  //                       </div>
  //                       <div class="mt-4">
  //                           <div class="d-flex" [attr.aria-valuenow]="priceRange" role="slider">
  //                               {{priceRange}}
  //                           </div>
  //                           <input name="priceRange" value={{priceRange}} id="priceRange" style="width: 100%;"
  //                               type="range" min="0" max="10000" step="100" [(ngModel)]="priceRange"
  //                               (change)="setPriceRange($event)">
  //                           <div class="float-left">0</div>
  //                           <div class="float-right">10000</div>
  //                       </div>
  //                   </div>
  //               </div>
  //           </div>
  //       </div>
  //   </div>
  //   <div class="col-md-7 ml-2 mt-1 ">
  //       <div class="card h-100  mt-4 ">
  //           <div class="card-body">
  //               <div class="justify-content-center">
  //                   Not Found !
  //               </div>
  //           </div>
  //       </div>
  //   </div>
  // </div>`,
  styleUrls: ['./search-engine.component.css'],
})
export class SearchEngineComponent implements OnInit {
  public priceRange;
  public search;
  public searchOn:boolean=false;
  public returnBtn;
  public oneWayBtn;
  public returnStatus: boolean;
  public flightData: any[];
  public filteredFlightData: any[];
  public returnFlightData: any[];

  constructor(private flightService: FlightServiceService) {
    this.returnBtn = 'btn block btn-info outline';
    this.oneWayBtn = 'btn block btn-info outline';
    this.priceRange = 10000;
    this.returnStatus = false;
    this.flightData = [];
    this.filteredFlightData = [];
    this.returnFlightData = [];
  }

  ngOnInit(): void {
    this.search = new Search('', '', '', '', 1);
    this.flightService.getFlightData().subscribe(
      (res) => {
        console.log('success', JSON.stringify(res));
        this.flightData = res;
      },
      (error) => {
        console.log('failed', error);
      }
    );
  }

  filterFlightData() {
    let result = this.flightData.filter((data) => {
      if (
        data &&
        data.from.city &&
        data.to.city &&
        data.from.city
          .toLowerCase()
          .includes(this.search.originName.trim().toLowerCase()) &&
        data.to.city
          .toLowerCase()
          .includes(this.search.destinationName.trim().toLowerCase()) &&
        data.depart === this.search.departureDate &&
        data.price <= this.priceRange
      ) {
        return data;
      }
    });
    this.filteredFlightData = result;
  }
 

  returnFlights() {
    let result = this.flightData.filter((data) => {
      if (
          data &&
          data.from &&
          data.from.city &&
          data.from.city
              .toLowerCase()
              .includes(this.search.destinationName.trim().toLowerCase()) &&
          data.to &&
          data.to.city &&
          data.to.city.toLowerCase().includes(this.search.originName.trim().toLowerCase()) &&
          data.depart === this.search.returnDate &&
          data.price <= this.priceRange
      ) {
          return data;
      }
  });
  this.returnFlightData=result;
  }

  setPriceRange(event) {
    //   this.ngOnInit();
    console.log(this.priceRange);
    this.priceRange = event.target.value;
    this.filterFlightData();
    this.returnFlights();
  }

  flightReturn(returnStatus) {
    if (returnStatus) {
      this.returnBtn = 'btn block btn-info ';
      this.oneWayBtn = 'btn block btn-info outline';
      this.returnStatus = true;
    } else {
      this.oneWayBtn = 'btn block btn-info ';
      this.returnBtn = 'btn block btn-info outline';
      this.search.returnDate = '';
      this.returnStatus = false;
    }
  }

  onBlurEvent(event) {
    event.currentTarget.type = 'text';
  }
  onFocusEvent(event) {
    event.currentTarget.type = 'date';
  }

  onChangePassenger(count) {
    if (count === 'add') {
      if (this.search.passenger < 5)
        this.search.passenger = this.search.passenger + 1;
    } else {
      if (this.search.passenger > 1)
        this.search.passenger = this.search.passenger - 1;
    }
  }

  onSearch() {
    this.searchOn=true;
    this.filterFlightData();
    this.returnFlights();
    console.log(JSON.stringify(this.search));
  }
}
