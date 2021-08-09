var Animal = /** @class */ (function () {
    function Animal(_nombre, _edad) {
        this.nombre = _nombre;
        this.edad = _edad;
    }
    Animal.prototype.moverse = function () {
        console.log('Me muevo');
    };
    return Animal;
}());
var perro = new Animal('Felipe', 1);
perro.raza = 'Bulldog';
