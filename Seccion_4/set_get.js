var Persona = /** @class */ (function () {
    function Persona(_nombre) {
        this.nombre = _nombre;
    }
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function (_nombre) {
            this.nombre = _nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var padre = new Persona('Luis');
padre.setNombre = 'Roberto';
console.log(padre.getNombre);
