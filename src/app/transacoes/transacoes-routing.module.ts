import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepositoComponent} from './deposito/deposito.component';
import {TransacaoConcluidaComponent} from './transacao-concluida/transacao-concluida.component';
import {SaqueComponent} from './saque/saque.component';
import {TransferenciaComponent} from './transferencia/transferencia.component';


const routes: Routes = [
  {path: 'deposito', component: DepositoComponent},
  {path: 'saque', component: SaqueComponent},
  {path: 'transferencia', component: TransferenciaComponent},
  {path: 'transacao-concluida', component: TransacaoConcluidaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransacoesRoutingModule {
}
