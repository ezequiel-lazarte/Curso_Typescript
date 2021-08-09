const mostrar = (nombre:string, apellido:string, anio:number = 2022) => {
    return `Se llama ${nombre} ${apellido} y esta en el ${anio}`;
}

console.log(mostrar('Ezequiel', 'Lazarte'));
console.log(mostrar('Jenifer', 'Miranda', 2020));