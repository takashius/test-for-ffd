import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ListadoComponent } from './components/listado/listado.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    ProfesoresComponent,
    EstudiantesComponent,
    ListadoComponent,
    SolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
