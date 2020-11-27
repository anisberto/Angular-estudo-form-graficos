import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficoGeralComponent } from './Gerenciamentos/relatorios/graficos/grafico-geral/grafico-geral.component';
import { CadastroComponent } from './navegacao/cadastro/cadastro.component';
import { HomeComponent } from './navegacao/home/home/home.component';
import { UserComponent } from './navegacao/perfil/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'users', component: UserComponent },
  { path: 'grafico', component: GraficoGeralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
