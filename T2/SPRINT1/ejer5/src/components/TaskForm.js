// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask, categories }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task, category });
    setTask('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>
          Selecciona una categoría
        </option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TaskForm;
