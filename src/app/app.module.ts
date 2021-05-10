import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IonRangeSliderModule} from 'ng2-ion-range-slider'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonRangeSliderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
