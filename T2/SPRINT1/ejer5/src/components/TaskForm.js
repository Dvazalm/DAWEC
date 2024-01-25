// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask, categories, addCategory }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      task,
      category,
      completed: false,
    };

    addTask(newTask);
    setTask('');
    setCategory('');
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (category.trim() === '') {
      return;
    }

    addCategory(category);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Tarea:</label>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <label>Categoría:</label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Sin categoria</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Añadir Tarea</button>
        

      <input 
        style={{ marginTop: '20px' }}
        type="text"
        value={category}
        onChange={handleCategoryChange}
        placeholder="Nueva categoría"
      />

<button type="button" onClick={handleAddCategory}>
        Añadir nueva categoría
      </button>
    </form>
  );
};

export default TaskForm;