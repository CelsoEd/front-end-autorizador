import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContaService} from '../conta.service';
import {Router} from '@angular/router';
import {ContaCompleta} from '../../model/conta.model';
import {Cpf} from '../../util/validadores/cpf';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html'
})
export class NovaContaComponent implements OnInit {

  form: FormGroup;
  suscesso: string;
  contaFront: ContaCompleta;

  constructor(private fb: FormBuilder, private contaService: ContaService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      cpfTitular: this.fb.control('', Validators.required),
      tipoDoPacoteDeServicos: this.fb.control('', Validators.required)
    });
  }

  criaConta() {
    this.contaService.novaConta(this.form.value)
      .subscribe(conta => {
        this.contaFront = conta;
      });
    this.suscesso = `Conta criada com suscesso`;
  }
}
