import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepositoComponent} from './deposito/deposito.component';
import {SaqueComponent} from './saque/saque.component';
import {TransferenciaComponent} from './transferencia/transferencia.component';
import {TransacoesRoutingModule} from './transacoes-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {TransacaoService} from './transacao.service';
import {UtilModule} from '../util/util.module';
import {TransacaoConcluidaComponent} from './transacao-concluida/transacao-concluida.component';
import {ContaModule} from '../conta/conta.module';


@NgModule({
  declarations: [DepositoComponent, SaqueComponent, TransferenciaComponent, TransacaoConcluidaComponent],
  imports: [
    CommonModule,
    TransacoesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    UtilModule,
    ContaModule
  ],
  providers: [
    TransacaoService
  ]
})
export class TransacoesModule {
}
