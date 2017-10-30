import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GoogleLogoComponent} from './google-logo/google-logo.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import { GoogleButtonsComponent } from './google-buttons/google-buttons.component';
import { LanguagesComponent } from './languages/languages.component';
import { BottomDivComponent } from './bottom-div/bottom-div.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleLogoComponent,
    SearchBoxComponent,
    GoogleButtonsComponent,
    LanguagesComponent,
    BottomDivComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
