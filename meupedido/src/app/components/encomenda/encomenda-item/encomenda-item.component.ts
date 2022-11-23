import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Encomenda } from 'src/app/models/encomenda';
import { Item } from 'src/app/models/item';
import { Produto } from 'src/app/models/produto';
import { ClienteService } from 'src/app/services/cliente.service';
import { EncomendaService } from 'src/app/services/encomenda.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-encomenda-item',
  templateUrl: './encomenda-item.component.html',
  styleUrls: ['./encomenda-item.component.css']
})
export class EncomendaItemComponent implements OnInit {
 
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

  constructor( 
    private encomendaService: EncomendaService,
    private route: ActivatedRoute,)
    { }

  ngOnInit(): void {
    this.encomenda.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.encomendaService.findById(this.encomenda.id).subscribe(resposta => {
      this.encomenda = resposta;
    })
  }


}
