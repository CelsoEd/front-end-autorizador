import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {MenuLateralComponent} from './menu-lateral/menu-lateral.component';
import {CoreRoutingModule} from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuLateralComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    MenuLateralComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
