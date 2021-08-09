var yo = { nombre: 'Ezequiel', altura: 1.8, peso: 65 };
var tu = { altura: 2, peso: 90 };
function MostrarMediaPeso(persona) {
    var mediaPeso = persona.altura / persona.peso;
    if (persona.nombre) {
        return persona.nombre + " tiene una media de " + mediaPeso;
    }
    else {
        return "No se quien eres pero tiene una altura de " + mediaPeso;
    }
}
console.log(MostrarMediaPeso(yo));
console.log(MostrarMediaPeso(tu));
