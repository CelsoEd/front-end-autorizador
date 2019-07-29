import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepositoComponent} from './deposito/deposito.component';
import {SaqueComponent} from './saque/saque.component';
import {TransferenciaComponent} from './transferencia/transferencia.component';
import {SaldoComponent} from './saldo/saldo.component';
import {ExtratoComponent} from './extrato/extrato.component';


const routes: Routes = [
  {path: 'deposito', component: DepositoComponent},
  {path: 'saque', component: SaqueComponent},
  {path: 'transferencia', component: TransferenciaComponent},
  {path: 'saldo', component: SaldoComponent},
  {path: 'extrato', component: ExtratoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransacoesRoutingModule {
}
