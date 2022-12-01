export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    imgprofile: string;

    constructor(nombre: string, apellido: string, descripcion: string, imgprofile: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.imgprofile = imgprofile;
    }
}