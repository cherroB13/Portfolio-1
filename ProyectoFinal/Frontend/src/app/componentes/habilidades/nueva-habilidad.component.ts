import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private habilidadesS: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidades = new Habilidades(this.nombre, this.porcentaje);
    this.habilidadesS.save(habilidades).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo crear");
        this.router.navigate(['']);
      }
    )
  }

}
