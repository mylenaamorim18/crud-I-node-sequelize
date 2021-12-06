import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Usuario } from '../model/usuario.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();

  constructor(private router: Router, private http: HttpClient) { }

  public login(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:4000/login/autenticacao", usuario)
  }

  logout() {
    this.isAuthenticated = false;  
    this.authStatusListener.next(false);  
    this.router.navigate(['/']);
  }
  

}
