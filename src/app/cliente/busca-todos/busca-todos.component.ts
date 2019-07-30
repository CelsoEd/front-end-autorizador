import {Component, Inject, OnInit} from '@angular/core';
import {SituacaoAutorizacao} from '../../util/enuns/situacao-autorizacao.enum';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../../model/cliente.model';

@Component({
  selector: 'app-busca-todos',
  templateUrl: './busca-todos.component.html',
  styleUrls: ['./busca-todos.component.css']
})
export class BuscaTodosComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.oonsultaTodos();
  }

  oonsultaTodos() {
    this.clienteService.consulta()
      .subscribe(cliente => {
        this.clientes = cliente;
      }
      );
}


}
