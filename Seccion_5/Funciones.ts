interface General {
    (nombre:string, apellido:string, edad:number):void;
}

let funcionGeneral1:General = function(nombre:string, apellido:string, edad:number):void {
    console.log(`Te llamas ${nombre} ${apellido} y tiene ${edad} años`);
}

funcionGeneral1('Ezequiel', 'Lazarte', 20);