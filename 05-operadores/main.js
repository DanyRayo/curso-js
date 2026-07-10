let frase = "Hola soy Daniel";                      // String o Cadena de texto
let anio = 2027;                                    // Numero entero
let interes = 2.7;                                  //Numero decimal / Float / double
let mayorEdad = true;                               // Boleano / Boolean
let vacia;                                          // undefined
let nula = null;                                    // null
let frutas = ["fresa", "sandia", "naranja"];        // array o arreglo
let heroe = {nombre: "Batman", universo: "DC"};     // Objeto (entidad con clave y valor)

console.log(frase, interes, mayorEdad);


// Operador de tipo (typeof)
console.log(typeof heroe);

// Aritmeticos (matematicos)
let numero1 = 12;
let numero2 = 44;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let residuo = numero1 % numero2;
let potencia = numero1 ** numero2;


console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("Division: " + division);
console.log("Residuo: " + residuo);
console.log("Potencia: " + potencia);

// Asignacion
let numerito = 17;
//numerito = 17 + 3; // Me da 20
numerito += 3;
numerito -= 3;
numerito *= 3;
numerito /= 3;

console.log("numerito es igual a: " + numerito);

// Comparacion
let numerazo = 31;

console.log(numerazo == "31");
console.log(numerazo === "31");
console.log(numerazo != "31");
console.log(numerazo !== "31");
console.log(numerazo > 55);
console.log(numerazo < 55);
console.log(numerazo >= 55);
console.log(numerazo <= 55);

// Logicos
let esMayorDeEdad = true;
let tieneEntrada = true;

console.log(esMayorDeEdad && tieneEntrada);
console.log(esMayorDeEdad || tieneEntrada);
console.log(!esMayorDeEdad);


// Cadena
let mensaje1 = "hola";
let mensaje2 = "que tal?";
let mensaje_total = mensaje1 + " " + mensaje2;

mensaje_total += " Soy el Profe Rayo";
console.log(mensaje_total);

// Incremento y decremento
let cifra = 1200;

cifra++;
cifra--;

console.warn(cifra);