import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { data } from '../interface';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit, data {

  public languageName: any;
  public allCountries: any;
  public language: any;

  constructor(private httpService: HttpService, private _route: ActivatedRoute, private location: Location, private spinningService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    // find perticular language name
    this.language = this._route.snapshot.paramMap.get('language')
    this.languageName = this._route.snapshot.paramMap.get('name');
    this.spinningService.show();
    // ready the details for all countries by languageName
    this.httpService.getCountriesByLanguage(this.language).subscribe(
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
