import { FlightServiceService } from './flight-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { AvialableFlightsComponent } from './avialable-flights/avialable-flights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchEngineComponent,
    AvialableFlightsComponent,
    FlightCardComponent,
    EmptyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FlightServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
