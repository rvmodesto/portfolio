import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { ContatoComponent } from './contato/contato.component';
import { MenuComponent } from './menu/menu.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';

const routes: Routes = [

  {path:'', redirectTo: 'background', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'contato', component:ContatoComponent},
  {path: 'sobre-mim', component: SobreMimComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'background', component: BackgroundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
