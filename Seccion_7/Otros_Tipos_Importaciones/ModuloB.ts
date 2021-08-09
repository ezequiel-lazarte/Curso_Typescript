import { nombre, Persona, Humano, mostrar} from "./ModuloA";

const hombre:Humano = {nombre:'Ezequiel'};
const mujer:Persona = new Persona('Jenifer');

mostrar(hombre.nombre);
mostrar(mujer.nombre);