import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'personajes'},
  {path: 'personajes', component: PersonajesComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'solicitudes', component: SolicitudesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
