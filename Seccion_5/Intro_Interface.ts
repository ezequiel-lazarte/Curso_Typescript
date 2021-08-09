interface Persona {
    //atributos
    nombre:string;
    apellido:string;
}

function caminar(persona:Persona):void {
    console.log(`${persona.nombre} estas caminando!`);
}

let hombre = {nombre:'Ezequiel', apellido:'Lazarte', edad:34};

caminar(hombre);