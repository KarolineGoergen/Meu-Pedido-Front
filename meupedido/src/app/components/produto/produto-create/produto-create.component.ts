import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto ={
    id: '',
    nome: '',
    descricao: '',
    unMedida: '',
    valorUn: 0,
    status: '',
  }

  nome: FormControl = new FormControl(null,Validators.minLength(3));
  descricao: FormControl = new FormControl(null,Validators.nullValidator);
  unMedida: FormControl = new FormControl(null,Validators.nullValidator);
  valorUn: FormControl = new FormControl(null,Validators.required);
  
  constructor(
    private service: ProdutoService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    return this.nome.valid && this.valorUn.valid 
  }

  create(): void{
    this.service.create(this.produto).subscribe(resposta =>{
      this.toast.success('Produto cadastrado com sucesso', 'Cadastrado!');
      this.router.navigate(['produtos']);
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
