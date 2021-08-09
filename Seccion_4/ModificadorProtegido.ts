class Padre {
    private nombre:string
    protected edad:number

    public constructor(_nombre:string, _edad:number) {
        this.nombre = _nombre;
        this.edad = _edad;
    }

    public mostrarNombre():void {
        console.log(this.nombre);
    }
}

class Hijo extends Padre {
    public apellido:string

    constructor(_nombre:string, _edad:number, _apellido:string) {
        super(_nombre, _edad);
        this.apellido = _apellido;
    }

    public mostrarEdad():void {
        console.log(this.edad);
    }
}

const hijo = new Hijo('Ezequiel', 20, 'Lazarte');
console.log(hijo.apellido);