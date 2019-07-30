import {Cliente} from './cliente.model';

export interface Conta {
  agencia: number;
  cpfTitular: string;
  tipoDoPacoteDeServicos: string;
}

export interface ContaCompleta {
  saldo: string;
  agencia: number;
  numero: number;
  titular: Cliente;
  estado: string;
  tipoDoPacoteDeServicos: string;
}
