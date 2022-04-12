import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-agregar-solicitudes',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private requestsService:RequestsService) { }

  formSolicitud = new FormGroup({
   nombre: new FormControl('', Validators.required),
   correo: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  enviarDatos():any {
    this.requestsService.addSolicitud(this.formSolicitud.value);
    this.formSolicitud.reset();
  }

}
