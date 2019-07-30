import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MensagemErroComponent} from './mensagem-erro/mensagem-erro.component';
import {InputMoedaComponent} from './input-moeda/input-moeda.component';
import { CpfPipe } from './pipe/cpf.pipe';


@NgModule({
  declarations: [InputComponent, MensagemErroComponent, InputMoedaComponent, CpfPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    InputMoedaComponent,
    CpfPipe
  ]
})
export class UtilModule {
}
