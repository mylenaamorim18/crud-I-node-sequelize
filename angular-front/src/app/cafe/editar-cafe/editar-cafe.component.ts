import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutoConstructorModel } from '../../model/produtoConstructor.model';
import { EditarCafeService } from '../../service/editar-cafe.service';

@Component({
  selector: 'app-editar-cafe',
  templateUrl: './editar-cafe.component.html',
  styleUrls: ['./editar-cafe.component.css']
})

export class EditarCafeComponent implements OnInit {

  cafe: ProdutoConstructorModel;

  id: any;
  loading: boolean = true;

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

  async editarCafe() {
    try {
      const result = await this.editarCafeService.editarCafe(this.id, this.cafe).toPromise();
      this.router.navigateByUrl("cafe/lista");
    } catch (error) {
      console.log("erro ao editar dados do café x", error);
    }
  }
}
