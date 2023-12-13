"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Importar la clase y la interfaz desde tarea.ts
var tarea_1 = require("./tarea");
// Uso de la lista de tareas
var lista = new tarea_1.ListaDeTareas();
// Añadir tareas
lista.agregarTarea('Hacer ejercicio');
lista.agregarTarea('Estudiar TypeScript');
// Mostrar tareas antes de borrar o marcar como importante
lista.mostrarTareas();
// Borrar una tarea
lista.borrarTarea(1);
// Mostrar tareas después de borrar una
lista.mostrarTareas();
// Añadir una nueva tarea y marcarla como importante
lista.agregarTarea('Preparar presentación');
lista.marcarComoImportante(2);
// Mostrar tareas después de añadir y marcar como importante
lista.mostrarTareas();
// Mostrar tareas importantes
lista.mostrarTareasImportantes();
