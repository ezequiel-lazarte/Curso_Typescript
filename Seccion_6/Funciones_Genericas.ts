function mostrar(dato:string):string {
    return dato;
}

console.log(mostrar('Ezequiel'));

function mostrarGenerica<T>(dato:T):T {
    return dato;
}

const funcionGenerica2 = <T>(dato:T):T => {
    return dato;
}

console.log(mostrarGenerica(5));