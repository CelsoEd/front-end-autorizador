import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Autorizacao} from '../model/autorizacao.model';
import {TransacaoConsultaModel} from '../model/transacao-consulta.model';
import {TransacaoFinanceira, TransacaoTransferencia} from '../model/transacao.model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http: HttpClient) {
  }

  deposita(transacao: TransacaoFinanceira): Observable<Autorizacao> {
    return this.http
      .post<Autorizacao>(`${environment.apiUrl}/autorizador/deposito-saque`, transacao);
  }

  consultaSaldo(transacao: TransacaoConsultaModel): Observable<Autorizacao> {
    return this.http
      .post<Autorizacao>(`${environment.apiUrl}/autorizador/lancamento-saldo`, transacao);
  }

  sacar(transacao: TransacaoFinanceira): Observable<Autorizacao> {
    return this.http
      .post<Autorizacao>(`${environment.apiUrl}/autorizador/deposito-saque`, transacao);
  }

  transferir(transacao: TransacaoTransferencia): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizador/transferencia`, transacao);
  }

  consultaLancamentos(transacao: TransacaoConsultaModel): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${environment.apiUrl}/autorizador/lancamento-saldo`, transacao);
  }

}
