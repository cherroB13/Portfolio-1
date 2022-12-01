import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDatosComponent } from './componentes/datos/edit-datos.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades.component';
import { NuevaHabilidadComponent } from './componentes/habilidades/nueva-habilidad.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NuevaExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaeduc', component: NuevaEducacionComponent},
  {path:'editeduc/:id', component: EditEducacionComponent},
  {path:'nueva-habilidad', component: NuevaHabilidadComponent},
  {path:'edit-habilidades/:id', component: EditHabilidadesComponent},
  {path:'edit-datos/:id', component: EditDatosComponent},
  {path:'nuevo-proyecto', component: NuevoProyectoComponent},
  {path:'edit-proyecto/:id', component: EditProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
