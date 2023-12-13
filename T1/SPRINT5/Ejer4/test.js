"use strict";
// test.ts
Object.defineProperty(exports, "__esModule", { value: true });
var tarea_1 = require("./tarea");
// Realizar pruebas
var prueba = function () {
    // Instanciar la lista de tareas
    var lista = new tarea_1.ListaDeTareas();
    // Añadir tarea a la lista de tareas
    console.log(`\n`);
    console.log(`Se ha crado "Hacer ejercicio 4 para Ricardo"`);
    lista.agregarTarea('Hacer ejercicio 4 para Ricardo');
    

    lista.mostrarTareas();
    console.log(`\n`);

    // Añadir una nueva tarea a la lista
    console.log(`Se ha creado Estudiar TypeScript"`);
    lista.agregarTarea('Estudiar TypeScript');



    // Mostrar tareas después de añadir y marcar como importante
    lista.mostrarTareas();
    console.log(`\n`);

    console.log(`Se ha marcado como importante "Hacer ejercicio 4 para Ricardo"`);
    // Marcar esa tarea como importante
    lista.marcarComoImportante(1);

    
    // Mostrar tareas importantes
    lista.mostrarTareasImportantes();
    console.log(`\n`);

    console.log(`Lista de tarea general para apreciar que tarea 1 es importante ahora:`);
    lista.mostrarTareas();
    console.log(`\n`);
    lista.borrarTarea(1);
    console.log(`Se ha borrado "Hacer ejercicio 4 para Ricardo"`);
    console.log(`\n`);

    lista.mostrarTareas();
    console.log(`\n`);

};
// Ejecutar las pruebas
prueba();
