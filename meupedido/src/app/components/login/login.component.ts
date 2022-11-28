import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private toast: ToastrService,
    private service: AuthService) { }

  ngOnInit(): void {
  }

  logar(){
  this.service.authenticate(this.cred)
  }

  validaCampos(): boolean{
    return this.username.valid && this.password.valid
  }
}
