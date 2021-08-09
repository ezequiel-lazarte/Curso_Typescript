"use strict";
exports.__esModule = true;
exports.mostrar = exports.Persona = exports.nombre = void 0;
exports.nombre = 'Ezequiel';
var Persona = /** @class */ (function () {
    function Persona(_nombre) {
        this.nombre = _nombre;
    }
    return Persona;
}());
exports.Persona = Persona;
var mostrar = function (data) {
    console.log(data);
};
exports.mostrar = mostrar;
