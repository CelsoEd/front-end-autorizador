import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {registerLocaleData} from '@angular/common';

import locatePt from '@angular/common/locales/pt';
import {MenuLateralComponent} from './menu-lateral/menu-lateral.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

registerLocaleData(locatePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
