import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'clientes', component: ClienteListComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
