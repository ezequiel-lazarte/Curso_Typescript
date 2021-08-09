abstract class ClaseAbstracta {
    protected nombre:string;
    private edad:number;

    constructor(edad:number) {

    }
    abstract set setNombre(nombre:string);

    saludo():void {
        console.log('Hola!');
    }
}

class Persona extends ClaseAbstracta{
    protected apellido:string;
    constructor(_edad:number, _nombre:string, _apellido:string) {
        super(_edad);
        this.nombre = _nombre;
        this.apellido = _apellido;
    }

    set setNombre(_nombre:string) {
        this.nombre = _nombre;
    }
    get getNombre():string {
        return this.nombre;
    }
}

const yo = new Persona(20, 'Ezequiel', 'Lazarte');
console.log(yo.getNombre);

yo.setNombre = 'Rodrigo';
console.log(yo.getNombre);