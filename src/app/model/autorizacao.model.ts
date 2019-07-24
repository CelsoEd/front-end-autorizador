export interface Autorizacao {
  nsu: number;
  dataHora: string;
  nsuOrigem: number;
  dataReferencia: string;
  canal: string;
  agenciaOrigem: number;
  tipoDaTransacao: string;
  transacao: string;
  motivoDaNegacao: string;
  estado: string;
}
