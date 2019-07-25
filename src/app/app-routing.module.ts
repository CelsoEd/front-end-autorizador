import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';


const routes: Routes = [
  {path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule'},
  {path: 'conta', loadChildren: './conta/conta.module#ContaModule'},
  {path: 'transacoes', loadChildren: './transacoes/transacoes.module#TransacoesModule'},
  {path: '', loadChildren: './core/core.module#CoreModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
