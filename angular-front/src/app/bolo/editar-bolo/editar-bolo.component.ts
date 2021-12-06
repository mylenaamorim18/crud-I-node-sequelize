import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutoConstructorModel } from '../../model/produtoConstructor.model';
import { EditarBoloService } from '../../service/editar-bolo.service';

@Component({
  selector: 'app-editar-bolo',
  templateUrl: './editar-bolo.component.html',
  styleUrls: ['./editar-bolo.component.css']
})
export class EditarBoloComponent implements OnInit {

  bolo: ProdutoConstructorModel;

  id: any;
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private editarBoloService: EditarBoloService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      try {
        this.id = params.id;
        const result = await this.editarBoloService.getBolo(this.id).toPromise();
        this.bolo = new ProdutoConstructorModel(result);

        this.loading = false;
      } catch (error) {
        console.log("erro ao retornar dados do bolo x", error);
      }
    });
  }

  async editarBolo() {
    try {
      const result = await this.editarBoloService.editarBolo(this.id, this.bolo).toPromise();
      this.router.navigateByUrl("bolo/lista");
    } catch (error) {
      console.log("erro ao editar dados do bolo x", error);
    }
  }

}
