import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'app/model/categoria.model';
import { Produto } from 'app/model/produto.model';
import { FormBoloService } from '../../service/form-bolo.service';

@Component({
  selector: 'app-form-bolo',
  templateUrl: './form-bolo.component.html',
  styleUrls: ['./form-bolo.component.css']
})

export class FormBoloComponent implements OnInit {

  bolo: Produto = new Produto();
  categorias: Categoria = new Categoria();

  id_categoria: any;
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private formBoloService: FormBoloService) { }

  ngOnInit() {
    this.formBoloService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;

    }), err => {
      console.log('erro ao retornar categorias', err)
    }
  }

  async cadastrarBolo() {
    try {
      console.log(this.id_categoria)
      const result = await this.formBoloService.cadastrarBolo(this.bolo).toPromise();

      console.log(result);

      this.router.navigateByUrl("/bolo/lista");
    } catch (error) {
      console.log("erro ao cadastrar novo bolo", error);
    }
  }

}
