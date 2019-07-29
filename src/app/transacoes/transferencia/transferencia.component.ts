import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransacaoService} from '../transacao.service';
import {Router} from '@angular/router';
import {SituacaoAutorizacao} from '../../util/enuns/situacao-autorizacao.enum';
import {TransacaoTransferenciaForm} from '../../model/transacao-base.model';
import {Data} from '../../util/data';
import {Canal} from '../../util/enuns/canal.enum';
import {TipoTransacao} from '../../util/enuns/tipo-transacao.enum';
import {TransacaoTransferencia} from '../../model/transacao.model';
import {ContaResponse} from '../../model/conta.model';
import {strictEqual} from 'assert';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html'
})
export class TransferenciaComponent implements OnInit {

  form: FormGroup;

  erro: string;

  constructor(private fb: FormBuilder, private transacaoService: TransacaoService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      conta: this.fb.control('', Validators.required),
      agenciaFavorecido: this.fb.control('', Validators.required),
      contaFavorecido: this.fb.control('', Validators.required),
      valor: this.fb.control('', [Validators.required, Validators.min(0.01)])
    });
  }

  transferir() {
    this.transacaoService.transferir(this.getTransacaoTransfereciaCompleta(this.form.value)).subscribe(autorizacao => {
      if (autorizacao.estado === SituacaoAutorizacao.AUTORIZADA) {
        this.router.navigate(['transacoes', 'transacao-concluida']);
      } else {
        this.erro = `Transação negada. Motivo: ${autorizacao.motivoDaNegacao}`;
      }
    });
  }

  private getTransacaoTransfereciaCompleta(transacaoTransferenciaForm: TransacaoTransferenciaForm): TransacaoTransferencia {
    return {
      nsuOrigem: 1,
      dataHora: Data.dataHoraAtualFormatada(),
      agencia: transacaoTransferenciaForm.agencia,
      conta: transacaoTransferenciaForm.conta,
      canal: Canal.EXTRACASH,
      agenciaFavorecido: transacaoTransferenciaForm.agenciaFavorecido,
      contaFavorecido: transacaoTransferenciaForm.contaFavorecido,
      tipo: TipoTransacao.TRANSFERENCIA,
      valor: transacaoTransferenciaForm.valor
    };
  }

  setContaOrigem(conta: ContaResponse) {
    this.form.get('agencia').setValue(conta.agencia);
    this.form.get('conta').setValue(conta.numero);
  }

  setContaDestino(contaDestino: ContaResponse) {
    this.form.get('agenciaFavorecido').setValue(contaDestino.agencia);
    this.form.get('contaFavorecido').setValue(contaDestino.numero);
  }
}
