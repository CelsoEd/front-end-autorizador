export interface TransacaoForm {
  agencia: number;
  conta: number;
  valor: string;
}


export interface TransacaoTransferenciaForm extends TransacaoForm {
  agenciaFavorecido: number;
  contaFavorecido: number;
}
