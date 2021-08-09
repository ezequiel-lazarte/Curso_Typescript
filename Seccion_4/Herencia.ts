class Padre {
    nombre:string
    edad:number

    constructor(_nombre:string, _edad:number) {
        this.nombre = _nombre;
        this.edad = _edad;
    }

    mostrarEdad():void {
        console.log(this.edad);
    }
}

class Hijo extends Padre {
    apellido:string

    constructor(_nombre:string, _edad:number, _apellido:string) {
        super(_nombre, _edad);
        this.apellido = _apellido;
    }
    setNombre(_nombre:string):void {
        this.nombre = _nombre;
    }
    getNombre():string {
        return this.nombre;
    }
}

const hijo = new Hijo('Ezequiel', 20, 'Lazarte');
console.log(hijo.getNombre());

hijo.setNombre('Rodrigo');
console.log(hijo.getNombre());