import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "localhost:8080/users"
  constructor(private httpCliente: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpCliente.get<User[]>(this.apiUrl);
  }
  getUserById(id: any): Observable<User>{
    const internalUrl = `localhost:8080/users/${id}`
    return this.httpCliente.get<User>(internalUrl);
  }
}
