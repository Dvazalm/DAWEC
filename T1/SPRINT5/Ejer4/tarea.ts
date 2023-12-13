// tarea.ts

// Definir la interfaz para una tarea
export interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
    importante: boolean;
  }
  
  // Clase que representa la lista de tareas
  export class ListaDeTareas {
    private tareas: Tarea[] = [];
    private tareasImportantes: Tarea[] = [];
  
    // Función para añadir una tarea
    agregarTarea(titulo: string) {
      const nuevaTarea: Tarea = {
        id: this.tareas.length + 1,
        titulo,
        completada: false,
        importante: false, // Por defecto, la tarea no es importante
      };
      this.tareas.push(nuevaTarea);
    }
  
    // Función para borrar una tarea por su id
    borrarTarea(id: number) {
      this.tareas = this.tareas.filter(tarea => tarea.id !== id);
      this.tareasImportantes = this.tareasImportantes.filter(
        tarea => tarea.id !== id
      );
    }
  
    // Función para marcar una tarea como importante por su id
    marcarComoImportante(id: number) {
      this.tareas = this.tareas.map(tarea =>
        tarea.id === id ? { ...tarea, importante: true } : tarea
      );
  
      // Añadir la tarea importante a la lista de tareas importantes
      const tareaImportante = this.tareas.find(tarea => tarea.id === id);
      if (tareaImportante) {
        this.tareasImportantes.push(tareaImportante);
      }
    }
  
    // Función para mostrar las tareas en la consola
    mostrarTareas() {
      console.log('Lista de Tareas:');
      this.tareas.forEach(tarea => {
        console.log(`[${tarea.id}] ${tarea.titulo} - ${
          tarea.completada ? 'Completada' : 'Pendiente'
        } - ${tarea.importante ? 'Importante' : 'Normal'}`);
      });
    }
  
    // Función para mostrar las tareas importantes en la consola
    mostrarTareasImportantes() {
      console.log('Lista de Tareas Importantes:');
      this.tareasImportantes.forEach(tarea => {
        console.log(`[${tarea.id}] ${tarea.titulo}`);
      });
    }
  }
  