let fs = require('fs');
let estudiante = require('./dependenciaPrimero');

let  holamundo = () => console.log("hola mundo");
let  holamundo2 = (holaMundoCallback ) => {
	 setTimeout(function (){	 holaMundoCallback ("Hola mundo 2 callback ") },3000);
}

let  holamundo3 = () => console.log("hola mundo 3 que belleza");

let  holaMundoCallback = ( texto ) => { console.log( texto ) }


holamundo();
holamundo2( holaMundoCallback );
holamundo3();

console.log(estudiante);

fs.writeFile('archivo.txt',"texto", (err)=>{ if(err) throw (err); console.log("Creacion Archivo"); });