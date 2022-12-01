import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-datos',
  templateUrl: './edit-datos.component.html',
  styleUrls: ['./edit-datos.component.css']
})
export class EditDatosComponent implements OnInit {
  persona: persona = null;
  imgProfile: string = ''
  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.getPersona().subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("No se pudo modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, {
      nombre: this.persona.nombre,
      apellido: this.persona.apellido,
      descripcion: this.persona.descripcion,
      imgprofile: this.persona.imgprofile
    }).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo modificar");
        this.router.navigate(['']);
      }
    )
  }

  
  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil:_" + id;
    this.imageService.uploadImage($event, name);
  }
}


