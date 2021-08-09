var mostrar = function (nombre, apellido, anio) {
    if (anio === void 0) { anio = 2022; }
    return "Se llama " + nombre + " " + apellido + " y esta en el " + anio;
};
console.log(mostrar('Ezequiel', 'Lazarte'));
console.log(mostrar('Jenifer', 'Miranda', 2020));
