import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoConstructorModel } from 'app/model/produtoConstructor.model';
import { EditarBoloService } from 'app/service/editar-bolo.service';

@Component({
  selector: 'app-visulizar-bolo',
  templateUrl: './visulizar-bolo.component.html',
  styleUrls: ['./visulizar-bolo.component.css']
})
export class VisulizarBoloComponent implements OnInit {

  bolo: ProdutoConstructorModel;

  id: any; //pegar valor do index passado pelo input
  loading: boolean = true;
  
  total: number = 1;
  valorInicial = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private editarBoloService: EditarBoloService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      try {
        this.id = params.id;
        const result = await this.editarBoloService.getBolo(this.id).toPromise();
        this.bolo = new ProdutoConstructorModel(result);

        console.log(this.bolo);
        this.loading = false;
      } catch (error) {
        console.log("erro ao retornar dados do bolo x", error);
      }
    });
  }

  onMudouValor(evento: any){
    this.total = evento.novoValor;
  }

}