import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Encomenda } from 'src/app/models/encomenda';
import { EncomendaService } from 'src/app/services/encomenda.service';


@Component({
  selector: 'app-encomenda-item',
  templateUrl: './encomenda-item.component.html',
  styleUrls: ['./encomenda-item.component.css']
})
export class EncomendaItemComponent implements OnInit {
  ELEMENT_DATA: Encomenda[] = []
  FILTERED_DATA: Encomenda[] = []
  
  displayedColumns: string[] = ['nome', 'data', 'valor', 'observacao', 'cidade', 'bairro', 'logradouro', 'numero', 'itens' , 'itens1'];
  dataSource = new MatTableDataSource<Encomenda>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: EncomendaService) { }

  ngOnInit(): void {
    this.findAll();
  }
  
  findAll(){
    this.service.findAll().subscribe(resposta =>{
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Encomenda>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

}
