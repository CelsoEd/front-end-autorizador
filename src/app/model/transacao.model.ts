export interface Transacao {
  nsuOrigem: number;
  dataHora: string;
  canal: string;
  tipo: string;
  agencia: number;
  conta: number;
  valor: string;
}

export interface TransacaoTransferencia extends Transacao {
  agenciaFavorecido: number;
  contaFavorecido: number;
}
