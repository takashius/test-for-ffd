import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() dataSource:any;
  @Input() pageSizeOptions:any;
  displayedColumns: string[] = ['Imagen', 'name', 'patronus', 'dateOfBirth'];

  constructor() { }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
