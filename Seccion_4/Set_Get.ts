class Persona {
    private nombre:string

    constructor(_nombre:string) {
        this.nombre = _nombre;
    }

    get getNombre():string {
        return this.nombre;
    }
    
    set setNombre(_nombre:string) {
        this.nombre = _nombre;
    }
}

const padre = new Persona('Luis');
padre.setNombre = 'Roberto';
console.log(padre.getNombre);