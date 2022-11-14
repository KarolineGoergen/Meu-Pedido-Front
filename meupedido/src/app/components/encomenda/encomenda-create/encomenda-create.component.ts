import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Encomenda } from 'src/app/models/encomenda';
import { Produto } from 'src/app/models/produto';
import { ClienteService } from 'src/app/services/cliente.service';
import { EncomendaService } from 'src/app/services/encomenda.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-encomenda-create',
  templateUrl: './encomenda-create.component.html',
  styleUrls: ['./encomenda-create.component.css']
})
export class EncomendaCreateComponent implements OnInit {

  encomenda: Encomenda = {
    id: '',
    dataEncomenda: '',
    dataEntrega: '',
    observacao: '',
    valorTotal: 0,
    itens: [],
    cliente: '',
    nomeCliente: '',
    cidade: '',
    bairro: '',
    logradouro: '',
    numero: 0,
    status: ''
  }

  cliente: Cliente[] = []
  produto: Produto[] = []
  
  constructor( 
    private encomendaService: EncomendaService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private toast: ToastrService,
    private router: Router)
    { }

  ngOnInit(): void {
    this.findAllCliente();
    this.findAllProduto();
  }

  create(): void{
    this.encomendaService.create(this.encomenda).subscribe(resposta =>{
      this.toast.success('Encomenda criada com sucesso', 'Cadastrado!');
      this.router.navigate(['encomendas']);
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

  findAllCliente(): void{
    this.clienteService.findAll().subscribe(resposta =>{
      this.cliente = resposta;
    })
  }

  findAllProduto(): void{
    this.produtoService.findAll().subscribe(resposta =>{
      this.produto = resposta;
    })
  }

}
