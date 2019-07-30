import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Conta, ContaCompleta} from '../model/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) {
  }

  novaConta(conta: Conta): Observable<any> {
    return this.http.post<ContaCompleta>(`${environment.apiUrl}/conta/nova`, conta);
  }
}
