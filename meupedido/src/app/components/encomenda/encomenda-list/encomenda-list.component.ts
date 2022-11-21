import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Encomenda } from 'src/app/models/encomenda';
import { EncomendaService } from 'src/app/services/encomenda.service';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@Component({
  selector: 'app-encomenda-list',
  templateUrl: './encomenda-list.component.html',
  styleUrls: ['./encomenda-list.component.css']
})
export class EncomendaListComponent implements OnInit {

  
  ELEMENT_DATA: Encomenda[] = []
  FILTERED_DATA: Encomenda[] = []
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornaStatus(status: any): string{
    if(status == '0'){
      return 'PRODUÇÃO'
    } else if(status == '1'){
      return 'ENTREGUE'
    } else {
      return 'CANCELADO'
    }
  }

  ordenaStatus(status: any): void{
    let list: Encomenda[] = []
    this.ELEMENT_DATA.forEach(element =>{
      if(element.status == status)
      list.push(element)
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Encomenda>(list);
    this.dataSource.paginator = this.paginator;
  }
  
  
}
