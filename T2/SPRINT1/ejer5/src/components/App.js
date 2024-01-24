// src/components/App.js
import React, { useEffect, useReducer, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

const initialState = {
  tasks: [],
  categories: ['trabajo', 'personal', 'estudio'],
  filter: 'all',
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      dispatch({ type: 'SET_TASKS', payload: storedTasks });
    }
    setLoading(false);
  }, []); // Solo se ejecuta en el montaje inicial

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }, [state.tasks, loading]);

  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now(), completed: false };
    dispatch({ type: 'ADD_TASK', payload: taskWithId });
  };

  const toggleTask = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <div className="app-container">
      <h1>Gestor de Tareas</h1>
      {loading ? (
        <p>Cargando tareas...</p>
      ) : (
        <>
          <TaskForm addTask={addTask} categories={state.categories} />
          <TaskList tasks={state.tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </>
      )}
    </div>
  );
};

export default App;
