class Persona<T> {
    private nombre:T;
    private apellido:T;
    private velocidad:T;

    constructor(nombre:T, apellido:T) {

    }

    set setNombre(_nombre:T) {
        this.nombre = _nombre;
    }

    get getNombre():T {
        return this.nombre;
    }

    caminar:(Params:T) => T 
}