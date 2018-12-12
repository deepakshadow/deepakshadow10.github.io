import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { data } from '../interface';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [Location]
})
export class CurrencyComponent implements OnInit, data {
  public currency: any;
  public allCountries: any;

  constructor(private spinnerService: Ng4LoadingSpinnerService, private location: Location, private httpService: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    // find perticular currency name
    this.currency = this._route.snapshot.paramMap.get('currency');
    // ready the details for all countries by currency
    this.spinnerService.show()
    this.httpService.getCountriesByCurrency(this.currency).subscribe(
      (data) => {
        this.allCountries = data;
        this.spinnerService.hide();
      }, (error) => {
        console.log(error.message);
      }
    ) // end subscription
  }

  public goBack: any = () => {
    this.location.back(); // back function is get back to the prev page
  } // end go to prev page

}
