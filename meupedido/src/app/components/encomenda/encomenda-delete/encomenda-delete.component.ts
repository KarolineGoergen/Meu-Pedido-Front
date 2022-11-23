import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Encomenda } from 'src/app/models/encomenda';
import { EncomendaService } from 'src/app/services/encomenda.service';


@Component({
  selector: 'app-encomenda-delete',
  templateUrl: './encomenda-delete.component.html',
  styleUrls: ['./encomenda-delete.component.css']
})
export class EncomendaDeleteComponent implements OnInit {

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
    private service: EncomendaService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.encomenda.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }


  findById(): void{
    this.service.findById(this.encomenda.id).subscribe(resposta => {
      this.encomenda = resposta;
    })
  }

  delete(): void{
    this.service.update2(this.encomenda).subscribe(resposta =>{
      this.toast.success('Encomenda cancelada!', 'Status');
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
}

