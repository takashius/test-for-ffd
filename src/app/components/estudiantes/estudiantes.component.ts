import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import { DataPj } from 'src/app/models/DataPj';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  dataSource:any;
  isLoading:Boolean = true;

  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.connectService.ObtenerEstudiantes().subscribe(resp => {
      this.dataSource = new MatTableDataSource<DataPj>(resp);
      this.isLoading = false;
    });
  }

}
