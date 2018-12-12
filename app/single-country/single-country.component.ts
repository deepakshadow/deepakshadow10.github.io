import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Location } from '@angular/common';
import { data } from '../interface';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css'],
  providers: [Location]
})
export class SingleCountryComponent implements OnInit, data {

  public countryName: any;
  public currentCountry: any;
  public country: any;

  constructor(private _route: ActivatedRoute, private location: Location, private httpService: HttpService, private spinningService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.countryName = this._route.snapshot.paramMap.get('country');
    this.spinningService.show();
    this.httpService.getAllCountries().subscribe(
      (data) => {
        this.country = data;
        for (let i in this.country) {
          if (this.country[i].name == this.countryName) {
            this.currentCountry = this.country[i];
          }
        }
        this.spinningService.hide();
      }, (error) => {
        console.log(error.message);
      }
    ) // end subscription
  }

  public goBack: any = () => {
    this.location.back(); // back function is get back to the prev page
  } // end go to prev page

}
