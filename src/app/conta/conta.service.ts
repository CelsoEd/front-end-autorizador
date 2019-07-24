import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Conta, ContaResponse} from '../model/conta.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) {
  }

  novaConta(conta: Conta): Observable<any> {
    return this.http.post(`${environment.apiUrl}/conta/nova`, conta);
  }

  busca(termo: string): Observable<ContaResponse[]> {
    const httpParams = new HttpParams().append('q', termo);
    return this.http.get<ContaResponse[]>(`${environment.apiUrl}/conta/procura`, {params: httpParams});
  }
}
