import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { ProdutoConstructorModel } from '../model/produtoConstructor.model';

@Injectable()
export class FormCafeService {

  constructor(private http: HttpClient) { }

  cadastrarCafe(cafe: ProdutoConstructorModel) : Observable<any> {
    return this.http.post("http://localhost:4000/cafe/novo", cafe);
  }

  getCategorias() : Observable<any> {
    return this.http.get("http://localhost:4000/categoria/listar");
  }
}
