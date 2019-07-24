import {Cliente} from './cliente.model';

export interface Conta {
  agencia: number;
  cpfTitular: string;
  tipoDoPacoteDeServicos: string;
}

export interface ContaResponse {
  agencia: number;
  numero: number;
  saldo: string;
  titular: Cliente;
  estado: string;
  tipoDoPacoteDeServicos: string;
}
