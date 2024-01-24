// src/components/TaskList.js
import React, { useState } from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask, categories }) => {
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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleCategoryFilterChange = (newCategoryFilter) => {
    setCategoryFilter(newCategoryFilter);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div>
        <label>Filtrar por estado:</label>
        <select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="all">Todos</option>
          <option value="completed">Completados</option>
          <option value="active">Activos</option>
        </select>
      </div>
      <div>
        <label>Filtrar por categoría:</label>
        <select
          value={categoryFilter}
          onChange={(e) => handleCategoryFilterChange(e.target.value)}
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
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.task} - {task.category}</span>
            <button id='botonEliminar' onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
