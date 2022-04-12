import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Requests';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  solicitudes: Request[] = [];

  constructor(public requestsService: RequestsService) { }

  ngOnInit(): void {
    this.solicitudes = this.requestsService.getSolicitud();
  }

  borrarSolicitud(solicitud: Request): void {
    if(confirm('Seguro que desea borrar la solicitud?')) {
      this.requestsService.deleteSolicitud(solicitud);
    }
  }

}
