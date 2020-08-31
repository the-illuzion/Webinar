import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SeminarPageComponent } from './seminar-page/seminar-page.component';
import { SeminarMobileComponent } from './seminar-mobile/seminar-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SeminarPageComponent,
    SeminarMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
