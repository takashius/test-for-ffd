import { Injectable } from '@angular/core';
import { Request } from '../models/Requests';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  Solicitudes!: Request[];

  constructor() { }

  getSolicitud() {
    const local: any = localStorage.getItem('solicitud');
    if(local === null) {
      this.Solicitudes = [];
    } else {
      this.Solicitudes = JSON.parse(local);
    }
    return this.Solicitudes;
  }

  addSolicitud(newSolicitud: Request) {
    this.Solicitudes.push(newSolicitud);
    let solicitud = [];
    const local: any = localStorage.getItem('solicitud');
    if(local === null) {
      solicitud = [];
      solicitud.push(newSolicitud);
      localStorage.setItem('solicitud', JSON.stringify(solicitud));
    } else {
      solicitud = JSON.parse(local);
      solicitud.push(newSolicitud); 
      localStorage.setItem('solicitud', JSON.stringify(solicitud));
    }
  }

  deleteSolicitud(delSolicitud: Request) {
    for (let i = 0; i < this.Solicitudes.length; i++) {
      if (delSolicitud == this.Solicitudes[i]) {
        this.Solicitudes.splice(i, 1);
        localStorage.setItem('solicitud', JSON.stringify(this.Solicitudes));
      }
    }
  }
}
