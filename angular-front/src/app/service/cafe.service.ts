import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import { ProdutoConstructorModel } from '../model/produtoConstructor.model';

@Injectable()
export class CafeService {

  private headers: Headers = new Headers ({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  listarCafes() : Observable<any>{
    return this.http.get('http://localhost:4000/cafe/listar');
  }

  deletar(id:any) : Observable<any> {
    return this.http.delete(`http://localhost:4000/cafe/deletar/${id}`);
  }

}
