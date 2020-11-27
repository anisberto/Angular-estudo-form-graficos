import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './navegacao/cadastro/cadastro.component';
import { MenuComponent } from './navegacao/menu/menu/menu.component';
import { HomeComponent } from './navegacao/home/home/home.component';
import { UserComponent } from './navegacao/perfil/user/user.component';
import { FormsModule } from '@angular/forms';
import { GraficoGeralComponent } from './Gerenciamentos/relatorios/graficos/grafico-geral/grafico-geral.component';
import { BaseRelaContasComponent } from './Gerenciamentos/relatorios/arquivos/base-rela-contas/base-rela-contas.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    MenuComponent,
    HomeComponent,
    UserComponent,
    GraficoGeralComponent,
    BaseRelaContasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
