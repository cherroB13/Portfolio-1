export class Experiencia {
    [x: string]: any;
    id? : number;
    nombreE : string;
    descripcionE : string;

    constructor(nombreE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }
}
