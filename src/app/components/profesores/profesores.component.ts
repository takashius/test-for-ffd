import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import { DataPj } from 'src/app/models/DataPj';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  dataSource:any;
  isLoading:Boolean = true;

  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.connectService.ObtenerProfesores().subscribe(resp => {
      this.dataSource = new MatTableDataSource<DataPj>(resp);
      this.isLoading = false;
    });
  }

}
