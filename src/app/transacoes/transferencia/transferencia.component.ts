import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransacaoService} from '../transacao.service';
import {Router} from '@angular/router';
import {SituacaoAutorizacao} from '../../util/enuns/situacao-autorizacao.enum';
import {Data} from '../../util/data';
import {Canal} from '../../util/enuns/canal.enum';
import {TipoTransacao} from '../../util/enuns/tipo-transacao.enum';
import {TransacaoTransferencia} from '../../model/transacao.model';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html'
})
export class TransferenciaComponent implements OnInit {

  form: FormGroup;

  suscesso: string;
  erro: string;

  constructor(private fb: FormBuilder, private transacaoService: TransacaoService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      conta: this.fb.control('', Validators.required),
      agenciaFavorecido: this.fb.control('', Validators.required),
      contaFavorecido: this.fb.control('', Validators.required),
      valor: this.fb.control('', [Validators.required, Validators.min(5.00)])
    });
  }

  transferir() {
    this.transacaoService.transferir(this.getTransacaoTransfereciaCompleta(this.form.value)).subscribe(autorizacao => {
      if (autorizacao.estado === SituacaoAutorizacao.AUTORIZADA) {
        this.erro = undefined;
        this.suscesso = `Transação concluida`;
      } else {
        this.suscesso = undefined;
        this.erro = `Transação negada motivo: ${autorizacao.motivoDaNegacao}`;
      }
    });
  }

  private getTransacaoTransfereciaCompleta(transferencia: TransacaoTransferencia) {
    return {
      nsuOrigem: 1,
      dataHora: Data.dataHoraAtualFormatada(),
      agencia: transferencia.agencia,
      conta: transferencia.conta,
      canal: Canal.EXTRACASH,
      agenciaFavorecido: transferencia.agenciaFavorecido,
      contaFavorecido: transferencia.contaFavorecido,
      valor: transferencia.valor,
      tipo: TipoTransacao.TRANSFERENCIA
    };
  }
}
