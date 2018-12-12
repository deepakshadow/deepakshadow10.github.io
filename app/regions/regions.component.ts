import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  public allRegions: any = ["africa", "asia", "oceania", "americas", "europe", "polar"];

  constructor(private spinningService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    // main page spinning loader
    this.spinningService.show();
    setTimeout(() => {
      this.spinningService.hide();
    }, 2000);

  }

}
