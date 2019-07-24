import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransacaoService} from '../transacao.service';
import {Router} from '@angular/router';
import {SituacaoAutorizacao} from '../../util/enuns/situacao-autorizacao.enum';
import {TransacaoForm} from '../../model/transacao-base.model';
import {Transacao} from '../../model/transacao.model';
import {Data} from '../../util/data';
import {Canal} from '../../util/enuns/canal.enum';
import {TipoTransacao} from '../../util/enuns/tipo-transacao.enum';
import {ContaResponse} from '../../model/conta.model';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html'
})
export class DepositoComponent implements OnInit {

  form: FormGroup;

  erro: string;

  constructor(private fb: FormBuilder, private transacaoService: TransacaoService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      conta: this.fb.control('', Validators.required),
      valor: this.fb.control('', [Validators.required, Validators.min(0.01)])
    });
  }

  deposita() {
    this.transacaoService.deposita(this.getTransacaoCompleta(this.form.value)).subscribe(autorizacao => {
      if (autorizacao.estado === SituacaoAutorizacao.AUTORIZADA) {
        this.router.navigate(['transacoes', 'transacao-concluida']);
      } else {
        this.erro = `Transação negada. Motivo: ${autorizacao.motivoDaNegacao}`;
      }
    });
  }

  private getTransacaoCompleta(transacao: TransacaoForm): Transacao {
    return {
      nsuOrigem: 1,
      dataHora: Data.dataHoraAtualFormatada(),
      agencia: transacao.agencia,
      canal: Canal.EXTRACASH,
      conta: transacao.conta,
      tipo: TipoTransacao.DEPOSITO,
      valor: transacao.valor
    };
  }

  setConta(conta: ContaResponse) {
    this.form.get('agencia').setValue(conta.agencia);
    this.form.get('conta').setValue(conta.numero);
  }
}
