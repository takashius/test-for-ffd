import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  APIHP: string = 'https://hp-api.herokuapp.com/api/characters/';

  constructor(private clientService:HttpClient) { }

  ObtenerPersonajes(casa:string):Observable<any>{
    return this.clientService.get(this.APIHP+'house/'+casa);
  }

  ObtenerProfesores():Observable<any>{
    return this.clientService.get(this.APIHP+'staff');
  }

  ObtenerEstudiantes():Observable<any>{
    return this.clientService.get(this.APIHP+'students');
  }
}
