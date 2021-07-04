import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search';

@Injectable({
  providedIn: 'root',
})
export class FlightServiceService {
  private _url: string = 'assets/data/flight.json';
  constructor(private http: HttpClient) {}
  // public getEmployeeHttp(): Observable<Search[]> {

  public getFlightData(): Observable<any[]> {
    // return this.http.get<Search[]>(this._url);
    return this.http.get<any[]>(this._url);
    // .pipe(catchError(this.errorHandler))
  }
}
