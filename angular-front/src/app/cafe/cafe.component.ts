import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutoConstructorModel } from '../model/produtoConstructor.model';
import { CafeService } from '../service/cafe.service';

import  Swal  from 'sweetalert2';
// import { SweetAlertOptions } from 'sweetalert2';

// import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  cafes: Array<any> = new Array();
  cafe: ProdutoConstructorModel;

  constructor(private cafeService: CafeService, private router: Router) { }

  ngOnInit() {
    this.listarCafes();
  }

  listarCafes() {
    this.cafeService.listarCafes().subscribe(cafes => {
      this.cafes = cafes;
    }), err => {
      console.log('erro ao retornar cafés', err)
    }
  }

  async deletarCafe(id:number) {
    Swal.fire({
      title: 'Deletar',
      // type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then(result => {
      if(result.value) {
        this.cafeService.deletar(id).subscribe(cafe => {
        Swal.fire('Excluído com sucesso', 'Foi', "success");
        window.location.reload();
        }), err => {
          Swal.fire('Não foi excluído', 'Erro', "error")
          console.log('erro ao deletar café', err)
        }
      }
    })
  }

}
