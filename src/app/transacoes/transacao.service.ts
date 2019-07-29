import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transacao, TransacaoTransferencia} from '../model/transacao.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Autorizacao} from '../model/autorizacao.model';
import {TransacaoConsultaModel} from '../model/transacao-consulta.model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private baseUrl = `${environment.apiUrl}/autorizador`;

  constructor(private http: HttpClient) {
  }

  deposita(transacao: Transacao): Observable<Autorizacao> {
    return this.http
      .post<Autorizacao>(`${this.baseUrl}/deposito-saque`, transacao);
  }

  consultaSaldo(transacao: TransacaoConsultaModel): Observable<Autorizacao> {
    return this.http
      .post<Autorizacao>(`${this.baseUrl}/lancamento-saldo`, transacao);
  }

  sacar(transacao: Transacao): Observable<Autorizacao> {
    return this.http
      .post<Autorizacao>(`${this.baseUrl}/deposito-saque`, transacao);
  }

  transferir(transacao: TransacaoTransferencia): Observable<Autorizacao> {
    return this.http.post<Autorizacao>(`${this.baseUrl}/transferencia`, transacao);
  }

  consultaLancamentos(transacao: TransacaoConsultaModel): Observable<Autorizacao> {
      return this.http.post<Autorizacao>(`${this.baseUrl}/lancamento-saldo`, transacao);
  }

}
