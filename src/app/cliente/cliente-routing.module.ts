import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NovoClienteComponent} from './novo-cliente/novo-cliente.component';
import {BuscaTodosComponent} from './busca-todos/busca-todos.component';


const routes: Routes = [
  {path: 'novo', component: NovoClienteComponent},
  {path: 'lista', component: BuscaTodosComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {
}
