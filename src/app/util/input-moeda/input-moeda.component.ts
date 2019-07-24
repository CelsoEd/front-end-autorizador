import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input-moeda',
  templateUrl: './input-moeda.component.html',
  styleUrls: ['./input-moeda.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputMoedaComponent,
      multi: true
    }
  ]
})
export class InputMoedaComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() model: AbstractControl;

  onChange: any;
  onTouched: any;

  value: string;

  disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = this.formataParaVisualizacao(obj);
  }

  focus() {
    this.onTouched(this.formataParaEnvio(this.value));
  }

  change() {
    this.value = this.formataParaVisualizacao(this.value);
    this.onChange(this.formataParaEnvio(this.value));
  }

  private formataParaVisualizacao(valor: string): string {
    valor = this.tiraPontosVirgulasLetras(valor);
    valor = this.retiraZerosAFrente(valor);
    valor = this.colocaZerosAFrenteCasoNecessario(valor);
    valor = valor.substr(0, valor.length - 2) + ',' + valor.substr(valor.length - 2);
    if (valor.length > 6) {
      let c = 6;
      while (c < valor.length) {
        valor = valor.substr(0, valor.length - c) + '.' + valor.substr(valor.length - c);
        c += 4;
      }
    }
    return valor;
  }

  private formataParaEnvio(valor: string): string {
    valor = this.tiraPontosVirgulasLetras(valor);
    valor = this.retiraZerosAFrente(valor);
    valor = this.colocaZerosAFrenteCasoNecessario(valor);
    valor = valor.substr(0, valor.length - 2) + '.' + valor.substr(valor.length - 2);
    return valor;
  }

  private tiraPontosVirgulasLetras(valor: string): string {
    valor = valor.replace(/[a-zA-Z]/g, '');
    valor = valor.replace(/\s/g, '');
    valor = valor.replace(/,/g, '');
    valor = valor.replace(/\./g, '');
    return valor;
  }

  private retiraZerosAFrente(valor: string): string {
    let i = 0;
    while (valor.charAt(i) === '0' && i < valor.length) {
      i++;
    }
    valor = valor.replace(valor.substr(0, i), '');
    return valor;
  }

  private colocaZerosAFrenteCasoNecessario(valor: string): string {
    while (valor.length < 3) {
      valor = '0' + valor;
    }
    return valor;
  }

  selecionaTexto(campo: HTMLInputElement) {
    campo.select();
  }
}
