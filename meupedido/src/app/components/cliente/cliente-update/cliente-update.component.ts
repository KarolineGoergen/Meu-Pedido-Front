import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

 
  cliente: Cliente ={
    id: '',
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    status: '',
  }

  nome: FormControl = new FormControl(null,Validators.minLength(3));
  email: FormControl = new FormControl(null,Validators.email);
  telefone: FormControl = new FormControl(null,Validators.required);


  constructor(
    private service: ClienteService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  validaCampos(): boolean{
    return this.nome.valid &&
    this.email.valid &&
    this.telefone.valid
  }

  findById(): void{
    this.service.findById(this.cliente.id).subscribe(resposta => {
      this.cliente = resposta;
    })
  }

  update(): void{
    this.service.update(this.cliente).subscribe(resposta =>{
      this.toast.success('Cliente atualizado com sucesso', 'Atualizado!');
      this.router.navigate(['clientes']);
    }, ex =>{
      if(ex.error.errors){
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }
}

