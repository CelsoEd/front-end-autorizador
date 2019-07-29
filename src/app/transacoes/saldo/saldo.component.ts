import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransacaoService} from '../transacao.service';
import {Data} from '../../util/data';
import {Canal} from '../../util/enuns/canal.enum';
import {TipoTransacao} from '../../util/enuns/tipo-transacao.enum';
import {SituacaoAutorizacao} from '../../util/enuns/situacao-autorizacao.enum';
import {TransacaoConsultaModel} from '../../model/transacao-consulta.model';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  form: FormGroup;
  saldo: any;
  erro: string;

  constructor(private fb: FormBuilder, private transacaoService: TransacaoService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      conta: this.fb.control('', Validators.required)
    });
  }

  consultaSaldo() {
    this.transacaoService.consultaSaldo(this.getTransacaoCompleta())
      .subscribe(autorizacao => {
        if (autorizacao.estado === SituacaoAutorizacao.AUTORIZADA) {
          this.saldo = JSON.parse(autorizacao.particao);
          this.erro = undefined;
        } else {
          this.saldo = undefined;
          this.erro = (`${autorizacao.motivoDaNegacao}`);
        }
      });
  }

  private getTransacaoCompleta(): TransacaoConsultaModel {
    return {
      nsuOrigem: 1,
      dataHora: Data.dataHoraAtualFormatada(),
      agencia: this.form.value.agencia,
      canal: Canal.EXTRACASH,
      conta: this.form.value.conta,
      tipo: TipoTransacao.SALDO
    };
  }
}
