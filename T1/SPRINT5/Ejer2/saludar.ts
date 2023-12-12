import * as readlineSync from 'readline-sync';

function saludar(nombre: string, edad: number): string {
  return `Hola! Mi nombre es ${nombre} y tengo ${edad} años.`;
}

// Obtener entrada del usuario
const nombreUsuario = readlineSync.question("Introduce tu nombre: ");
const edadUsuario = readlineSync.question("Introduce tu edad: ");

// Convierte la entrada de edad a un número
const edadNumero = parseInt(edadUsuario, 10);

// Verifica si la entrada de edad es un número válido
if (!isNaN(edadNumero)) {
  const saludo = saludar(nombreUsuario, edadNumero);
  console.log(saludo);
} else {
  console.log("Por favor, introduce una edad válida.");
}
