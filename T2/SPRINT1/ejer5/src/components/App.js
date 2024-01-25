import React, { useReducer, useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import CategoryMenu from './CategoryMenu';
import './App.css';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, task: action.payload.text } : task
      );
    default:
      return state;
  }
};

const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.payload;
    case 'ADD_CATEGORY':
      return [...state, action.payload];
    case 'DELETE_CATEGORY':
      return state.filter((category) => category !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, dispatchTasks] = useReducer(taskReducer, []);
  const [categories, dispatchCategories] = useReducer(categoryReducer, ['Trabajo', 'Personal', 'Estudio']);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    const savedCategories = JSON.parse(localStorage.getItem('categories'));

    if (savedTasks) {
      dispatchTasks({ type: 'SET_TASKS', payload: savedTasks });
    }

    if (savedCategories) {
      dispatchCategories({ type: 'SET_CATEGORIES', payload: savedCategories });
    }

    setLoading(false); // Mark loading as false once data is loaded
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      localStorage.setItem('categories', JSON.stringify(categories));
    }
  }, [tasks, categories, loading]);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while data is being loaded
  }

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
              editTask={(taskId, newText) => dispatchTasks({ type: 'EDIT_TASK', payload: { id: taskId, text: newText } })}
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
