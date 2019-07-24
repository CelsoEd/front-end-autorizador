import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {ContaService} from '../conta.service';
import {ContaResponse} from '../../model/conta.model';

@Component({
  selector: 'app-procura-conta',
  templateUrl: './procura-conta.component.html',
  styleUrls: ['./procura-conta.component.css']
})
export class ProcuraContaComponent implements OnInit {
  form: FormGroup;
  campoBusca: FormControl;

  contas: ContaResponse[];

  @Output()
  contaSelecionada = new EventEmitter();

  @Input()
  textoBotao: string;

  @Input()
  id: string;

  constructor(private fb: FormBuilder, private contaService: ContaService) {
  }

  ngOnInit() {
    this.campoBusca = this.fb.control('');
    this.form = this.fb.group({
      termo: this.campoBusca
    });
    this.campoBusca.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(termo => this.contaService.busca(termo))
    ).subscribe(contas => this.contas = contas);
  }

  seleciona(conta: ContaResponse) {
    this.contaSelecionada.emit(conta);
  }
}
