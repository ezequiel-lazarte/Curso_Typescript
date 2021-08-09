var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
    }
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function (_nombre) {
            this.nombre = _nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
