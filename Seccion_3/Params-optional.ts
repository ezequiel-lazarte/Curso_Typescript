const optional = (nombre:string, apellido:string, edad?:number) => {
    if(edad) {
        console.log(`Se llama ${nombre} ${apellido} y su edad es ${edad} años`);
    } else {
        console.log(`Se llama ${nombre} ${apellido}`);
    }
   
}

optional('Ezequiel', 'Lazarte');
optional('Jenifer', 'Miranda', 20);