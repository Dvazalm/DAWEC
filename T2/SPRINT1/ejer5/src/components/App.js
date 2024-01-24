// src/components/App.js
import React, { useReducer, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import CategoryMenu from './CategoryMenu';
import './App.css';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [...state, action.payload];
    case 'DELETE_CATEGORY':
      return state.filter((category) => category !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [tasks, dispatchTasks] = useReducer(taskReducer, []);
  const [categories, dispatchCategories] = useReducer(categoryReducer, ['Trabajo', 'Personal', 'Estudio']);

  // Al cargar la aplicación, establecer las categorías predeterminadas si aún no existen en el estado
  useEffect(() => {
    if (categories.length === 0) {
      dispatchCategories({ type: 'ADD_CATEGORY', payload: 'Trabajo' });
      dispatchCategories({ type: 'ADD_CATEGORY', payload: 'Personal' });
      dispatchCategories({ type: 'ADD_CATEGORY', payload: 'Estudio' });
    }
  }, [categories]);

  return (
    <div className="body-container">
      <div className="app-container">
        <div className="forms-container">
          <div className="task-form-container">
            <h1>Gestor de Tareas</h1>
            <TaskForm
              tasks={tasks}
              categories={categories}
              addTask={(task) => dispatchTasks({ type: 'ADD_TASK', payload: task })}
              addCategory={(category) => dispatchCategories({ type: 'ADD_CATEGORY', payload: category })}
            />
          </div>

          <div className="task-list-container">
            <TaskList
            tasks={tasks}
            toggleTask={(taskId) => dispatchTasks({ type: 'TOGGLE_TASK', payload: taskId })}
            deleteTask={(taskId) => dispatchTasks({ type: 'DELETE_TASK', payload: taskId })}
            categories={categories}
          />
        </div>

          <div className="category-form-container">

            <CategoryMenu
              categories={categories}
              deleteCategory={(category) => dispatchCategories({ type: 'DELETE_CATEGORY', payload: category })}
            />
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default App;
