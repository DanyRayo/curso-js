/*
Ejercicio 1:
Calcula cuántas horas le llevaria llegar a la luna a una 
nave espacial y guarda el resultado en una variable.

La distancia desde la tierra hasta la luna es de 384,400 kilometros.

La velocidad de la nave es de 1,225 km por hora.

*/

const distancia = 384400;
const velocidad = 1225;

const total = distancia / velocidad;

console.warn("la nave tardará: " + Math.ceil(total) + " horas aprox.");