"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(_nombre, _edad, _altura) {
        this.nombre = _nombre;
        this.edad = _edad;
        this.altura = _altura;
    }
    Persona.prototype.mostrar = function () {
        console.log(this.nombre + " tiene " + this.edad + " a\u00F1os y mide " + this.altura + " metros");
    };
    return Persona;
}());
exports["default"] = Persona;
