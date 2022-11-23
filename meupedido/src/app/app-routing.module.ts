import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { EncomendaCreateComponent } from './components/encomenda/encomenda-create/encomenda-create.component';
import { EncomendaDeleteComponent } from './components/encomenda/encomenda-delete/encomenda-delete.component';
import { EncomendaItemComponent } from './components/encomenda/encomenda-item/encomenda-item.component';
import { EncomendaListComponent } from './components/encomenda/encomenda-list/encomenda-list.component';
import { EncomendaUpdateComponent } from './components/encomenda/encomenda-update/encomenda-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: NavComponent, children: [
      {path: 'home', component: HomeComponent},

      {path: 'clientes', component: ClienteListComponent},
      {path: 'clientes/create', component: ClienteCreateComponent},
      {path: 'clientes/update/:id', component: ClienteUpdateComponent},
      {path: 'clientes/delete/:id', component: ClienteDeleteComponent},

      {path: 'produtos', component: ProdutoListComponent},
      {path: 'produtos/create', component: ProdutoCreateComponent},
      {path: 'produtos/update/:id', component: ProdutoUpdateComponent},
      {path: 'produtos/delete/:id', component: ProdutoDeleteComponent},

      {path: 'encomendas', component: EncomendaListComponent},
      {path: 'encomendas/item', component: EncomendaItemComponent},
      {path: 'encomendas/create', component: EncomendaCreateComponent},
      {path: 'encomendas/update/:id', component: EncomendaUpdateComponent},
      {path: 'encomendas/delete/cancelar/:id', component: EncomendaDeleteComponent},
      {path: 'encomendas/item/:id', component: EncomendaItemComponent},

    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
