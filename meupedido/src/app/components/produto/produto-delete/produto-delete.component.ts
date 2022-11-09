import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto ={
    id: '',
    nome: '',
    descricao: '',
    unMedida: '',
    valorUn: 0,
    status: '',
  }
  
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

  findById(): void{
    this.service.findById(this.produto.id).subscribe(resposta => {
      this.produto = resposta;
    })
  }

  delete(): void{
    this.service.delete(this.produto.id).subscribe(resposta =>{
      this.toast.success('Produto excluído', 'Deletado!');
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
