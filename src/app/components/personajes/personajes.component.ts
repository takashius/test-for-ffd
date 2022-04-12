import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import { DataPj } from 'src/app/models/DataPj';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  dataSource:any;
  isLoading:Boolean = true;

  constructor(private connectService: ConnectService) { }

  private ObtenerPj(casa:string):void{
    this.isLoading = true;
    this.connectService.ObtenerPersonajes(casa).subscribe(resp => {
      this.dataSource = new MatTableDataSource<DataPj>(resp);
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.ObtenerPj('gryffindor');
  }

  CambiarCasa(value:string): void{
    this.ObtenerPj(value);
  }

}
