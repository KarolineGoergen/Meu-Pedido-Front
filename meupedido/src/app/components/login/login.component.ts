import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cred: Credenciais = {
    username: '',
    password: ''
  }

  username = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(4));

  constructor(private toast: ToastrService,) { }

  ngOnInit(): void {
  }

  logar(){
    this.toast.error('Email e/ou Senha inválidos!', 'Erro...' )
    this.cred.password = '';
    this.cred.username = '';
  }

  validaCampos(): boolean{
    return this.username.valid && this.password.valid
  }
}
