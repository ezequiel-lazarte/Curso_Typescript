var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puertas_) {
        if (puertas_ === void 0) { puertas_ = 0; }
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    Vehiculo.prototype.acelerar = function (velocidad_) {
        this.velocidad = velocidad_;
    };
    Vehiculo.prototype.frenar = function () {
        this.velocidad = -this.velocidad;
    };
    Vehiculo.prototype.nitro = function () {
        this.velocidad = this.velocidad * 2;
    };
    return Vehiculo;
}());
var coche = new Vehiculo('BMW', '03/07/2021', 2);
var helicoptero = new Vehiculo('Buzzard', '01/07/2021', 2);
var lancha = new Vehiculo('Ford', '29/06/2021');
coche.acelerar(3);
console.log(coche.velocidad);
coche.velocidad = 5;
coche.nitro();
console.log(coche.velocidad);
