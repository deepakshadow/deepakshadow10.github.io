import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  private baseUrl: any = "https://restcountries.eu/rest/v2";

  constructor(public _http: HttpClient) { }


  // making api calls for getting country data
  public getAllCountries: any = () => {
    let myResponse = this._http.get(`${this.baseUrl}/all`);
    return myResponse;
  } // end get all countries

  public getCountriesByRegion: any = (region) => {
    let myResponse = this._http.get(`${this.baseUrl}/region/${region}`);
    return myResponse;
  } // end get all countries by using region

  public getCountriesByLanguage: any = (language) => {
    let myResponse = this._http.get(`${this.baseUrl}/lang/${language}`);
    return myResponse;
  } // end get all countries by using perticular language
  
  public getCountriesByCurrency: any = (currency) => {
    let myResponse = this._http.get(`${this.baseUrl}/currency/${currency}`);
    return myResponse;
  } // end get all countries by using perticular currency 

  // handle error
  private handleError: any = (err: HttpErrorResponse) => {
    return Observable.throw(err.message);
  } // end error handle

}
