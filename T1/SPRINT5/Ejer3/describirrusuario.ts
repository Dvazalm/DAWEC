// Definir la interfaz Usuario
interface Usuario {
    nombre: string;
    edad: number;
    correo: string;
  }
  
  // Crear función que acepta un objeto Usuario y devuelve una descripción del usuario
  function describirUsuario(usuario: Usuario): string {
    return `Hola! Soy el usuario ${usuario.nombre}, tengo ${usuario.edad} años y mi correo electrónico es ${usuario.correo}`;
  }
  
  // Crear varios objetos de prueba
  const usuario1: Usuario = { nombre: "Juan", edad: 25, correo: "juan@example.com" };
  const usuario2: Usuario = { nombre: "María", edad: 30, correo: "maria@example.com" };
  const usuario3: Usuario = { nombre: "Pedro", edad: 22, correo: "pedro@example.com" };
  const usuario4: Usuario = { nombre: "Ana", edad: 28, correo: "ana@example.com" };
  const usuario5: Usuario = { nombre: "Carlos", edad: 35, correo: "carlos@example.com" };
  
  // Crear un array de 5 Usuarios
  const usuarios: Usuario[] = [usuario1, usuario2, usuario3, usuario4, usuario5];
  
  // Imprimir por consola la descripción de cada usuario
  usuarios.forEach((usuario) => {
    console.log(describirUsuario(usuario));
  });
  