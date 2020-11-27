import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpCliente: HttpClient) { }
  
  getClientes(): Observable<Cliente[]> {
    const url = `${environment.urlApi}/cliente`;
    return this.httpCliente.get<Cliente[]>(url);
  }
  getCliente(id: number): Observable<Cliente> {
    const url = `${environment.urlApi}/cliente/${id}`;
    return this.httpCliente.get<Cliente>(url);
  }
  addCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.urlApi}/cliente/`;
    return this.httpCliente.post<Cliente>(url, cliente);
  }
  updatecliente(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.urlApi}/cliente/`;
    return this.httpCliente.put<Cliente>(url, cliente);
  }
  deletecliente(id: number): Observable<Cliente> {
    const url = `${environment.urlApi}/cliente/${id}`;
    return this.httpCliente.delete<Cliente>(url);
  }
}