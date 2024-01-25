import React, { useState } from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask, editTask, categories }) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed' && !task.completed) {
      return false;
    }
    if (filter === 'active' && task.completed) {
      return false;
    }
    if (categoryFilter && task.category !== categoryFilter) {
      return false;
    }
    return true;
  });

  const handleEditTask = (taskId, taskText) => {
    setEditTaskId(taskId);
    setEditTaskText(taskText);
  };

  const handleSaveEdit = (taskId) => {
    editTask(taskId, editTaskText); // Actualizar la tarea editada en el estado global
    setEditTaskId(null);
    setEditTaskText('');
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setEditTaskText('');
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div>
        <label>Filtrar por estado:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todos</option>
          <option value="completed">Completados</option>
          <option value="active">Activos</option>
        </select>
      </div>
      <div>
        <label>Filtrar por categoría:</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Todos</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredTasks.map((task) => (
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
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.task} - {task.category}</span>
                <button onClick={() => handleEditTask(task.id, task.task)}>Editar</button>
                <button onClick={() => deleteTask(task.id)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
