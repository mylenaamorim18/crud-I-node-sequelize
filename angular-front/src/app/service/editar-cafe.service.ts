import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { ProdutoConstructorModel } from '../model/produtoConstructor.model';

@Injectable()
export class EditarCafeService {

  constructor(private http: HttpClient) { }

  editarCafe(id: number, cafe: ProdutoConstructorModel) : Observable<any> {
    return this.http.patch(`http://localhost:4000/cafe/editar/${id}`, cafe);
  }

  getCafe(id: any) : Observable<any> {
    return this.http.get(`http://localhost:4000/cafe/visualizar/${id}`);
  }
  
}
