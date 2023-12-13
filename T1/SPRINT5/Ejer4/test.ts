// test.ts

import { ListaDeTareas, Tarea } from './tarea';

// Realizar pruebas
const prueba = () => {
  // Instanciar la lista de tareas
  const lista = new ListaDeTareas();

  // Añadir tarea a la lista de tareas
  lista.agregarTarea('Hacer ejercicio');

  // Mostrar tareas antes de borrar o marcar como importante
  lista.mostrarTareas();

  // Borrar tarea de la lista de tareas
  lista.borrarTarea(1);

  // Mostrar tareas después de borrar una
  lista.mostrarTareas();

  // Añadir una nueva tarea a la lista
  lista.agregarTarea('Estudiar TypeScript');

  // Marcar esa tarea como importante
  lista.marcarComoImportante(1);

  // Mostrar tareas después de añadir y marcar como importante
  lista.mostrarTareas();

  // Mostrar tareas importantes
  lista.mostrarTareasImportantes();
};

// Ejecutar las pruebas
prueba();
