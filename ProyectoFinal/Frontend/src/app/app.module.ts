import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades.component';
import { NuevaHabilidadComponent } from './componentes/habilidades/nueva-habilidad.component';
import { EditDatosComponent } from './componentes/datos/edit-datos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    DatosComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent,
    HabilidadesComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditExperienciaComponent,
    NuevaEducacionComponent,
    EditEducacionComponent,
    EditHabilidadesComponent,
    NuevaHabilidadComponent,
    EditEducacionComponent,
    EditDatosComponent,
    NuevoProyectoComponent,
    EditProyectoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
