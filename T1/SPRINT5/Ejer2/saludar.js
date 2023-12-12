"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function saludar(nombre, edad) {
    return "Hola! Mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os.");
}
// Obtener entrada del usuario
var nombreUsuario = readlineSync.question("Introduce tu nombre: ");
var edadUsuario = readlineSync.question("Introduce tu edad: ");
// Convierte la entrada de edad a un número
var edadNumero = parseInt(edadUsuario, 10);
// Verifica si la entrada de edad es un número válido
if (!isNaN(edadNumero)) {
    var saludo = saludar(nombreUsuario, edadNumero);
    console.log(saludo);
}
else {
    console.log("Por favor, introduce una edad válida.");
}
