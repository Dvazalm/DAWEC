import React, { useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'COMPLETE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case 'ADD_CATEGORY':
      return { ...state, categories: [...state.categories, action.payload] };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const TaskManager = () => {
  const initialState = {
    tasks: [],
    categories: ['Trabajo', 'Personal', 'Estudio'],
    filter: 'all',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTask, setNewTask] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Cargar tareas desde el Local Storage al inicio
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      dispatch({ type: 'ADD_TASK', payload: storedTasks });
    }
  }, []);

  useEffect(() => {
    // Guardar tareas en el Local Storage cuando cambian
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const addTask = () => {
    if (newTask.trim() !== '' && selectedCategory.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        category: selectedCategory,
        completed: false,
      };

      dispatch({ type: 'ADD_TASK', payload: task });
      setNewTask('');
      setSelectedCategory('');
    }
  };

  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'completed') {
      return task.completed;
    } else if (state.filter === 'deleted') {
      return !task.completed;
    } else if (state.filter === 'all' || state.filter === task.category) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        {/* ... Resto del código ... */}
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {/* ... Resto del código ... */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
