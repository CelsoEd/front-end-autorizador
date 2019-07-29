import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../cliente.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html'
})
export class NovoClienteComponent implements OnInit {

  form: FormGroup;
  suscesso: string;

  constructor(private fb: FormBuilder, private clienteService: ClienteService, private router: Router) {
    this.form = fb.group({
      nome: fb.control('', Validators.required),
      cpf: fb.control('', Validators.required)
    });
  }

  ngOnInit() {
  }

  criaCliente() {
    this.clienteService.novo(this.form.value).subscribe();
    this.suscesso = `Cliente cadastrado com suscesso`;
  }

}
