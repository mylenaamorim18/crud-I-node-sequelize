import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { ProdutoConstructorModel } from '../model/produtoConstructor.model';

@Injectable()
export class EditarBoloService {

  constructor(private http: HttpClient) { }

  editarBolo(id: number, bolo: ProdutoConstructorModel) : Observable<any> {
    return this.http.patch(`http://localhost:4000/bolo/editar/${id}`, bolo);
  }

  getBolo(id: any) : Observable<any> {
    return this.http.get(`http://localhost:4000/bolo/visualizar/${id}`);
  }
}
