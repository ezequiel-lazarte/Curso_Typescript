class Animal {
    private nombre:string
    private edad:number
    public raza:string

    public constructor(_nombre:string, _edad:number) {
        this.nombre = _nombre;
        this.edad = _edad;
    }

    public moverse():void {
        console.log('Me muevo');
    }
}

const perro = new Animal('Felipe', 1);
perro.raza = 'Bulldog';