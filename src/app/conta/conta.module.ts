import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NovaContaComponent} from './nova-conta/nova-conta.component';
import {ContaRoutingModule} from './conta-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContaService} from './conta.service';
import {HttpClientModule} from '@angular/common/http';
import {ProcuraContaComponent} from './procura-conta/procura-conta.component';
import {UtilModule} from '../util/util.module';


@NgModule({
  declarations: [
    NovaContaComponent,
    ProcuraContaComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilModule
  ],
  providers: [
    ContaService
  ],
  exports: [
    ProcuraContaComponent
  ]
})
export class ContaModule {
}
