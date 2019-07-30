import {Component, OnInit} from '@angular/core';
import {Data} from '../../util/data';
import {Canal} from '../../util/enuns/canal.enum';
import {TipoTransacao} from '../../util/enuns/tipo-transacao.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LancamentosModel} from '../../model/lancamentos.model';
import {TransacaoService} from '../transacao.service';
import {SituacaoAutorizacao} from '../../util/enuns/situacao-autorizacao.enum';
import {TransacaoConsultaModel} from '../../model/transacao-consulta.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  form: FormGroup;
  lancamentos: LancamentosModel [];
  erro: string;

  constructor(private fb: FormBuilder, private transacaoService: TransacaoService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      conta: this.fb.control('', Validators.required)
    });
  }

  consultaLancamento() {
    this.transacaoService.consultaLancamentos(this.getTransacaoCompleta())
      .subscribe(autorizador => {
        if (autorizador.estado === SituacaoAutorizacao.AUTORIZADA) {
          this.lancamentos = JSON.parse(autorizador.particao);
          this.erro = undefined;
        } else {
          this.erro = `${autorizador.motivoDaNegacao}`;
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
      tipo: TipoTransacao.EXTRATO,
    };
  }
}
