import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { Usuario } from '../model/usuario.model';

import  Swal  from 'sweetalert2';
import { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  mostrarMenuEmitter = new EventEmitter();

  constructor(private router: Router, private loginServer: AuthService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  public showAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon
  ): void {
    Swal.fire(title, message, icon)
  }

  login() {
    this.loginServer.login(this.usuario).subscribe(data => {
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/cafe/lista']);
    },
    error => {
      this.mostrarMenuEmitter.emit(false);
      this.showAlert(error.error.message, "Erro!", "error");
    })
  }

}
