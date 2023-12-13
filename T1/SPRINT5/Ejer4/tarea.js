"use strict";
// tarea.ts
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeTareas = void 0;
// Clase que representa la lista de tareas
var ListaDeTareas = /** @class */ (function () {
    function ListaDeTareas() {
        this.tareas = [];
        this.tareasImportantes = [];
    }
    // Función para añadir una tarea
    ListaDeTareas.prototype.agregarTarea = function (titulo) {
        var nuevaTarea = {
            id: this.tareas.length + 1,
            titulo: titulo,
            completada: false,
            importante: false, // Por defecto, la tarea no es importante
        };
        this.tareas.push(nuevaTarea);
    };
    // Función para borrar una tarea por su id
    ListaDeTareas.prototype.borrarTarea = function (id) {
        this.tareas = this.tareas.filter(function (tarea) { return tarea.id !== id; });
        this.tareasImportantes = this.tareasImportantes.filter(function (tarea) { return tarea.id !== id; });
    };
    // Función para marcar una tarea como importante por su id
    ListaDeTareas.prototype.marcarComoImportante = function (id) {
        this.tareas = this.tareas.map(function (tarea) {
            return tarea.id === id ? __assign(__assign({}, tarea), { importante: true }) : tarea;
        });
        // Añadir la tarea importante a la lista de tareas importantes
        var tareaImportante = this.tareas.find(function (tarea) { return tarea.id === id; });
        if (tareaImportante) {
            this.tareasImportantes.push(tareaImportante);
        }
    };
    // Función para mostrar las tareas en la consola
    ListaDeTareas.prototype.mostrarTareas = function () {
        console.log('Lista de Tareas:');
        this.tareas.forEach(function (tarea) {
            console.log("[".concat(tarea.id, "] ").concat(tarea.titulo, " - ").concat(tarea.completada ? 'Completada' : 'Pendiente', " - ").concat(tarea.importante ? 'Importante' : 'Normal'));
        });
    };
    // Función para mostrar las tareas importantes en la consola
    ListaDeTareas.prototype.mostrarTareasImportantes = function () {
        console.log('Lista de Tareas Importantes:');
        this.tareasImportantes.forEach(function (tarea) {
            console.log("[".concat(tarea.id, "] ").concat(tarea.titulo));
        });
    };
    return ListaDeTareas;
}());
exports.ListaDeTareas = ListaDeTareas;
