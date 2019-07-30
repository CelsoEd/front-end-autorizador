import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NovoClienteComponent} from './novo-cliente/novo-cliente.component';
import {ClienteRoutingModule} from './cliente-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClienteService} from './cliente.service';
import { BuscaTodosComponent } from './busca-todos/busca-todos.component';


@NgModule({
  declarations: [NovoClienteComponent, BuscaTodosComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule {
}
