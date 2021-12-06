import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'app/model/produto.model';
import { Categoria } from 'app/model/categoria.model';
import { FormCafeService } from '../../service/form-cafe.service';

@Component({
  selector: 'app-form-cafe',
  templateUrl: './form-cafe.component.html',
  styleUrls: ['./form-cafe.component.css']
})

export class FormCafeComponent implements OnInit {

  cafe: Produto = new Produto();
  categorias: Categoria = new Categoria();

  id_categoria: any;
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private formCafeService: FormCafeService) { }

  ngOnInit() {
    this.formCafeService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;

    }), err => {
      console.log('erro ao retornar categorias', err)
    }
  }

  async cadastrarCafe() {
    try {
      const result = await this.formCafeService.cadastrarCafe(this.cafe).toPromise();

      console.log(result);

      this.router.navigateByUrl("cafe/lista");
    } catch (error) {
      console.log("erro ao cadastrar novo café", error);
    }
  }

}
