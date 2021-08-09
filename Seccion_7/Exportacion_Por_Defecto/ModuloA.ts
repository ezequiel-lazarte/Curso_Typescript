class Persona {
    nombre:string;
    edad:number;
    altura:number;

    constructor(_nombre:string, _edad:number, _altura:number) {
        this.nombre = _nombre;
        this.edad = _edad;
        this.altura = _altura;
    }

    mostrar():void {
        console.log(`${this.nombre} tiene ${this.edad} años y mide ${this.altura} metros`);
    }
}

export default Persona;