import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransacaoService} from '../transacao.service';
import {SituacaoAutorizacao} from '../../util/enuns/situacao-autorizacao.enum';
import {Data} from '../../util/data';
import {Canal} from '../../util/enuns/canal.enum';
import {TipoTransacao} from '../../util/enuns/tipo-transacao.enum';
import {TransacaoFinanceira} from '../../model/transacao.model';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html'
})
export class SaqueComponent implements OnInit {

  form: FormGroup;

  erro: string;
  suscesso: string;

  constructor(private fb: FormBuilder, private transacaoService: TransacaoService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      conta: this.fb.control('', Validators.required),
      valor: this.fb.control('', [Validators.required, Validators.min(5.00)])
    });
  }

  sacar() {
    this.transacaoService.sacar(this.getTransacaoCompleta(this.form.value)).subscribe(autorizacao => {
      if (autorizacao.estado === SituacaoAutorizacao.AUTORIZADA) {
        this.erro = undefined;
        this.suscesso = `Saque realizado com suscesso`;
      } else {
        this.suscesso = undefined;
        this.erro = `Transação negada. Motivo: ${autorizacao.motivoDaNegacao}`;
      }
    });
  }

  private getTransacaoCompleta(transacao: TransacaoFinanceira) {
    return {
      nsuOrigem: 1,
      dataHora: Data.dataHoraAtualFormatada(),
      agencia: transacao.agencia,
      canal: Canal.EXTRACASH,
      conta: transacao.conta,
      tipo: TipoTransacao.SAQUE,
      valor: transacao.valor
    };
  }
}
