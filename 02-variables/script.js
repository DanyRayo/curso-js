// Variables
// Es una caja donde guardo información

var nombre = "Sergio Daniel";
/* Tiene un alcance mayor, es decir, yo mandar llamar esta variable desde cualquier punto del código. Pero tambien 
puede causar algunos errores por la misma alcance */

let apellido = "Rayo Herrera";
/* Tiene un alcance de bloque */

const nacionalidad = "Mexicano";
/* EL valor no cambia, el valor es constante */


let heroe = "Batman";
let universo = "DC";
let edad = 16;

let heroe_y_universo = heroe + " es un super heroe de la marca: " + universo;

heroe = "Spider-Man";
universo = "Marvel";

console.log(heroe, universo, edad);
alert(heroe_y_universo);