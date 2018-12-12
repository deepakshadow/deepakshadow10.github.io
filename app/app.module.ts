import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routing
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries/countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { HttpService } from './http.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountriesComponent,
    SingleCountryComponent,
    NotFoundComponent,
    CurrencyComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot([
      {path: 'region', component: RegionsComponent, pathMatch: 'full'},
      {path: '', redirectTo: 'region', pathMatch: 'full'},
      {path: '*', component: RegionsComponent},
      {path: 'countries/:region', component: CountriesComponent},
      {path: 'singleCountry/:country', component: SingleCountryComponent},
      {path: 'currency/:currency', component: CurrencyComponent},
      {path: 'language/:language/:name', component: LanguageComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [HttpService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
