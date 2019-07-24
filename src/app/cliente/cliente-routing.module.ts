import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NovoClienteComponent} from './novo-cliente/novo-cliente.component';


const routes: Routes = [
  {path: 'novo', component: NovoClienteComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {
}
