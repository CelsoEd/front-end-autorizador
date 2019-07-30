import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransacaoService} from '../transacao.service';
import {SituacaoAutorizacao} from '../../util/enuns/situacao-autorizacao.enum';
import {Data} from '../../util/data';
import {Canal} from '../../util/enuns/canal.enum';
import {TipoTransacao} from '../../util/enuns/tipo-transacao.enum';
import {TransacaoFinanceira} from '../../model/transacao.model';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html'
})
export class DepositoComponent implements OnInit {

  form: FormGroup;
  suscesso: string;
  erro: string;

  constructor(private fb: FormBuilder, private transacaoService: TransacaoService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      conta: this.fb.control('', Validators.required),
      valor: this.fb.control('', [Validators.required, Validators.min(5.00)])
    });
  }

  deposita() {
    this.transacaoService.deposita(this.getTransacaoCompleta())
      .subscribe(autorizacao => {
        if (autorizacao.estado === SituacaoAutorizacao.AUTORIZADA) {
          this.erro = undefined;
          this.suscesso = `Deposito realizado com sucesso`;
        } else {
          this.suscesso = undefined;
          this.erro = `Deposito não autorizado motivo: ${autorizacao.motivoDaNegacao}`;
        }
      });
  }

  private getTransacaoCompleta(): TransacaoFinanceira {
    return {
      nsuOrigem: 1,
      dataHora: Data.dataHoraAtualFormatada(),
      agencia: this.form.value.agencia,
      canal: Canal.EXTRACASH,
      conta: this.form.value.conta,
      tipo: TipoTransacao.DEPOSITO,
      valor: this.form.value.valor
    };
  }
}
