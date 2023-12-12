// Crear función que acepta un objeto Usuario y devuelve una descripción del usuario
function describirUsuario(usuario) {
    return "Hola! Soy el usuario ".concat(usuario.nombre, ", tengo ").concat(usuario.edad, " a\u00F1os y mi correo electr\u00F3nico es ").concat(usuario.correo);
}
// Crear varios objetos de prueba
var usuario1 = { nombre: "Juan", edad: 25, correo: "juan@example.com" };
var usuario2 = { nombre: "María", edad: 30, correo: "maria@example.com" };
var usuario3 = { nombre: "Pedro", edad: 22, correo: "pedro@example.com" };
var usuario4 = { nombre: "Ana", edad: 28, correo: "ana@example.com" };
var usuario5 = { nombre: "Carlos", edad: 35, correo: "carlos@example.com" };
// Crear un array de 5 Usuarios
var usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];
// Imprimir por consola la descripción de cada usuario
usuarios.forEach(function (usuario) {
    console.log(describirUsuario(usuario));
});
