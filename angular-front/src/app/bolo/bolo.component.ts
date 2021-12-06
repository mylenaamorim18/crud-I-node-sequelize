import { Component, OnInit } from '@angular/core';
import { BoloService } from '../service/bolo.service';

import Swal from 'sweetalert2';

// import { SweetAlertOptions } from 'sweetalert2';


@Component({
  selector: 'app-bolo',
  templateUrl: './bolo.component.html',
  styleUrls: ['./bolo.component.css']
})
export class BoloComponent implements OnInit {

  bolos: Array<any> = new Array();

  constructor(private boloService: BoloService) { }

  ngOnInit() {
    this.listarBolos();
  }

  listarBolos() {
    this.boloService.listarBolos().subscribe(bolos => {
      this.bolos = bolos;
    }), err => {
      console.log('erro ao retornar bolos', err)
    }
  }

  async deletarBolo(id: number) {
    Swal.fire({
      title: 'Deletar',
      // text: "Some text here!",
      // type: "question",
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then(result => {
      if (result.value) {
        this.boloService.deletar(id).subscribe(cafe => {
          Swal.fire('Excluído com sucesso', 'Foi', "success");
          window.location.reload();
        }), err => {
          Swal.fire('Não foi excluído', 'Erro', "error")
          console.log('erro ao deletar bolo', err)
        }
      }
    })
  }

}
