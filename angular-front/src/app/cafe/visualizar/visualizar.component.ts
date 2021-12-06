import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutoConstructorModel } from 'app/model/produtoConstructor.model';
import { EditarCafeService } from 'app/service/editar-cafe.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  cafe: ProdutoConstructorModel;

  id: any; //pegar valor do index passado pelo input
  loading: boolean = true;
  
  total: number = 1;
  valorInicial = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private editarCafeService: EditarCafeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      try {
        this.id = params.id;
        const result = await this.editarCafeService.getCafe(this.id).toPromise();
        this.cafe = new ProdutoConstructorModel(result);

        console.log(this.cafe);
        this.loading = false;
      } catch (error) {
        console.log("erro ao retornar dados do café x", error);
      }
    });
  }

  onMudouValor(evento: any){
    this.total = evento.novoValor;
  }

}
