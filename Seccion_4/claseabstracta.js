var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClaseAbstracta = /** @class */ (function () {
    function ClaseAbstracta(edad) {
    }
    ClaseAbstracta.prototype.saludo = function () {
        console.log('Hola!');
    };
    return ClaseAbstracta;
}());
var Persona = /** @class */ (function (_super) {
    __extends(Persona, _super);
    function Persona(_edad, _nombre, _apellido) {
        var _this = _super.call(this, _edad) || this;
        _this.nombre = _nombre;
        _this.apellido = _apellido;
        return _this;
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
}(ClaseAbstracta));
var yo = new Persona(20, 'Ezequiel', 'Lazarte');
console.log(yo.getNombre);
yo.setNombre = 'Rodrigo';
console.log(yo.getNombre);
