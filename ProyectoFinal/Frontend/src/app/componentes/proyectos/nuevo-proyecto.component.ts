import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  nombreP: string;
  descripcionP:string;

  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP);
    this.sProyectos.save(proyectos).subscribe(
      data =>{
        alert("Proyecto agregado");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo añadir")
        this.router.navigate(['']);
      }
    )

  }

}
