import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { data } from '../interface';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [Location]
})
export class CountriesComponent implements OnInit, data {
  public allCountries: any;
  public regionName: any;
  public countryName: any;

  constructor(private spinningService: Ng4LoadingSpinnerService, private httpService: HttpService, private _route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    // find perticular region name
    this.regionName = this._route.snapshot.paramMap.get('region');
    // ready the details for all countries by region
    this.spinningService.show();
    this.allCountries = this.httpService.getCountriesByRegion(this.regionName).subscribe(
      (data) => {
        this.allCountries = data;
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
