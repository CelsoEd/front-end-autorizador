import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../model/cliente.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  novo(cliente: Cliente): Observable<any> {
    return this.http.post(`${environment.apiUrl}/cliente/novo`, cliente);
  }

  consulta(): Observable<any> {
    return this.http.get<Cliente[]>(`${environment.apiUrl}/cliente/todos`);
  }


}
