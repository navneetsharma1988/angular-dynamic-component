import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobComponent } from './hero-job/hero-job.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdDirective } from './ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroProfileComponent,
    HeroJobComponent,
    AdBannerComponent,
    AdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HeroJobComponent, HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
