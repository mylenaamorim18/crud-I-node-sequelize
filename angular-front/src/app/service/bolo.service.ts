import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class BoloService {

  constructor(private http: HttpClient) { }

  listarBolos() : Observable<any>{
    return this.http.get('http://localhost:4000/bolo/listar');
  }

  deletar(id:any) : Observable<any> {
    return this.http.delete(`http://localhost:4000/bolo/deletar/${id}`);
  }
}
