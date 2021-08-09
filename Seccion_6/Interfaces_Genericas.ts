interface Humano<T> {
    nombre?:T;
    apellido?:T;
    edad?:T;
}

let hombre:Humano<string> = {nombre:'Ezequiel',apellido:'Lazarte'};

let macho:Humano<number> = {edad:20};
