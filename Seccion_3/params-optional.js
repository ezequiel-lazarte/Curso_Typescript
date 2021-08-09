var optional = function (nombre, apellido, edad) {
    if (edad) {
        console.log("Se llama " + nombre + " " + apellido + " y su edad es " + edad + " a\u00F1os");
    }
    else {
        console.log("Se llama " + nombre + " " + apellido);
    }
};
optional('Ezequiel', 'Lazarte');
optional('Jenifer', 'Miranda', 20);
