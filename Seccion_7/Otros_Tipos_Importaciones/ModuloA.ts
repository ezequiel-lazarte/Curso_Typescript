export const nombre:string = 'Ezequiel';

export class Persona {
    nombre:string;

    constructor(_nombre:string) {
        this.nombre = _nombre;
    }
}

export interface Humano {
    nombre:string;
}

export const mostrar = (data:string):void => {
    console.log(data);
}