class Animal {
    public nombre:string
    public edad:number

    public constructor(_nombre:string, _edad:number) {
        this.nombre = _nombre;
        this.edad = _edad;
    }

    public moverse():void {
        console.log('Me muevo');
    }
}

const perro = new Animal('Felipe', 1);
perro.nombre = "Cambiado XDD";