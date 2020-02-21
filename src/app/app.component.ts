import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
