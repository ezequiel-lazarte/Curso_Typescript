class Vehiculo {
    marca:string
    fecha:string
    puertas:number
    velocidad:number

    constructor(marca_:string, fecha_:string, puertas_:number = 0) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }

    acelerar(velocidad_:number):void {
        this.velocidad = velocidad_;
    }

    frenar():void {
        this.velocidad = -this.velocidad;
    }

    nitro():void {
        this.velocidad = this.velocidad*2;
    }
}

const coche = new Vehiculo('BMW', '03/07/2021', 2);
const helicoptero = new Vehiculo('Buzzard', '01/07/2021', 2);
const lancha = new Vehiculo('Ford', '29/06/2021');

coche.acelerar(3);
console.log(coche.velocidad);
coche.velocidad = 5;
coche.nitro();
console.log(coche.velocidad);