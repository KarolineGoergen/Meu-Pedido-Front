import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.produto.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  validaCampos(): boolean{
    return this.nome.valid && this.valorUn.valid 
  }

  findById(): void{
    this.service.findById(this.produto.id).subscribe(resposta => {
      this.produto = resposta;
    })
  }

  update(): void{
    this.service.update(this.produto).subscribe(resposta =>{
      this.toast.success('Produto atualizado com sucesso', 'Atualizado!');
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
