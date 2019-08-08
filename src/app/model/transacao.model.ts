export interface TransacaoFinanceira {
  nsuOrigem: number;
  dataHora: string;
  canal: string;
  tipo: string;
  agencia: number;
  conta: number;
  valor: string;
}

export interface TransacaoTransferencia extends TransacaoFinanceira {
  agenciaFavorecido: number;
  contaFavorecido: number;
}
