import React, { useState } from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleEditTask = (taskId, taskText) => {
    setEditTaskId(taskId);
    setEditTaskText(taskText);
  };

  const handleSaveEdit = (taskId) => {
    editTask(taskId, editTaskText);
    setEditTaskId(null);
    setEditTaskText('');
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setEditTaskText('');
  };

  const filterTasks = (task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
  };

  const filterTasksByCategory = (task) => {
    if (categoryFilter === 'all') {
      return true;
    } else {
      return task.category === categoryFilter;
    }
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>
      <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
        <option value="all">Todas las Categorías</option>
        {/* Mapear las categorías disponibles */}
        {Array.from(new Set(tasks.map(task => task.category))).map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <ul>
        {tasks.filter(filterTasks).filter(filterTasksByCategory).map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editTaskId === task.id ? (
              <>
                <input
                  id='textEdit'
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(task.id)}>Guardar</button>
                <button onClick={handleCancelEdit}>Cancelar</button>
              </>
            ) : (
              <>
                <input
                  id='checkboxOption'
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span className={task.completed ? 'completed-text' : ''}>{task.task} - {task.category}</span>
                <div id='opcionTasksMenu'>
                  {!task.completed && (
                    <>
                      <button id='botonEliminar' onClick={() => handleEditTask(task.id, task.task)}>Editar</button>
                      <button id='botonEditar' onClick={() => deleteTask(task.id)}>Eliminar</button>
                    </>
                  )}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
