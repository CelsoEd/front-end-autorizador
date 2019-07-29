import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransacaoService} from '../transacao.service';
import {Route} from '@angular/router';
import {TransacaoForm} from '../../model/transacao-base.model';
import {Transacao} from '../../model/transacao.model';
import {Data} from '../../util/data';
import {Canal} from '../../util/enuns/canal.enum';
import {TipoTransacao} from '../../util/enuns/tipo-transacao.enum';
import {SituacaoAutorizacao} from '../../util/enuns/situacao-autorizacao.enum';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  form: FormGroup;
  saldo: any;

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
        } else {
          alert('A');
        }
      });
  }

  private getTransacaoCompleta(): Transacao {
    return {
      nsuOrigem: 1,
      dataHora: Data.dataHoraAtualFormatada(),
      agencia: this.form.value.agencia,
      canal: Canal.EXTRACASH,
      conta: this.form.value.conta,
      tipo: TipoTransacao.SALDO,
      valor: null
    };
  }
}
