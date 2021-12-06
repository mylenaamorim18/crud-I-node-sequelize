import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { BoloComponent } from './bolo/bolo.component';
import { BoloService } from './service/bolo.service';
import { CafeComponent } from './cafe/cafe.component';
import { CafeService } from './service/cafe.service';
import { FormCafeComponent } from './cafe/form-cafe/form-cafe.component';
import { FormCafeService } from './service/form-cafe.service';
import { EditarCafeComponent } from './cafe/editar-cafe/editar-cafe.component';
import { EditarCafeService } from './service/editar-cafe.service';
import { FormBoloComponent } from './bolo/form-bolo/form-bolo.component';
import { EditarBoloComponent } from './bolo/editar-bolo/editar-bolo.component';
import { FormBoloService } from './service/form-bolo.service';
import { EditarBoloService } from './service/editar-bolo.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { MenuComponent } from './view/menu/menu.component';
import  Swal  from 'sweetalert2';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BotaoOutputComponent } from './botao-output/botao-output.component';
import { VisualizarComponent } from './cafe/visualizar/visualizar.component';
// import { VisualizarService } from './service/visualizar.service';
import { VisulizarBoloComponent } from './bolo/visulizar-bolo/visulizar-bolo.component';

@NgModule({
  declarations: [
    AppComponent,
    BoloComponent,
    CafeComponent,
    FormCafeComponent,
    EditarCafeComponent,
    FormBoloComponent,
    EditarBoloComponent,
    LoginComponent,
    MenuComponent,
    BotaoOutputComponent,
    VisualizarComponent,
    VisulizarBoloComponent,
  ],
  imports: [
    BrowserModule,
    // SweetAlert2Module.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'cafe/lista',
        component: CafeComponent
      },
      {
        path: 'cafe/visualizar/:id',
        component: VisualizarComponent
      },
      {
        path: 'cafe/cadastrar',
        component: FormCafeComponent
      },
      { path: 'cafe/editar/:id', 
      component: EditarCafeComponent 
      },
      {
        path: 'bolo/lista',
        component: BoloComponent
      },
      {
        path: 'bolo/visualizar/:id',
        component: VisulizarBoloComponent
      },
      {
        path: 'bolo/cadastrar',
        component: FormBoloComponent
      },
      { path: 'bolo/editar/:id', 
      component: EditarBoloComponent 
      },
      { path: 'login', 
      component: LoginComponent 
      },
    ])
  ],
  providers: [HttpClientModule, BoloService, CafeService, FormCafeService, EditarCafeService, FormBoloService, EditarBoloService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
