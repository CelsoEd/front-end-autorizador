import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule'},
  {path: 'conta', loadChildren: './conta/conta.module#ContaModule'},
  {path: 'transacoes', loadChildren: './transacoes/transacoes.module#TransacoesModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
