import React, { Component } from 'react';

class AppTareas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tareas: [],
      nuevaTarea: '',
      filtro: 'todas'
    };
  }

  componentDidMount() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.setState({ tareas: JSON.parse(tareasGuardadas) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('tareas', JSON.stringify(this.state.tareas));
  }

  handleChange = (e) => {
    this.setState({ nuevaTarea: e.target.value });
  };

  agregarTarea = () => {
    const { nuevaTarea } = this.state;
    if (nuevaTarea.trim() !== '') {
      const nuevaListaTareas = [...this.state.tareas, { nombre: nuevaTarea, completada: false }];
      this.setState({ tareas: nuevaListaTareas, nuevaTarea: '' });
    }
  };

  marcarTarea = (index) => {
    const nuevasTareas = [...this.state.tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    this.setState({ tareas: nuevasTareas });
  };

  eliminarTarea = (index) => {
    const nuevasTareas = [...this.state.tareas];
    nuevasTareas.splice(index, 1);
    this.setState({ tareas: nuevasTareas });
  };

  cambiarFiltro = (filtro) => {
    this.setState({ filtro });
  };

  render() {
    const { tareas, nuevaTarea, filtro } = this.state;
    let tareasFiltradas = [...tareas];
    if (filtro === 'completadas') {
      tareasFiltradas = tareas.filter((tarea) => tarea.completada);
    } else if (filtro === 'pendientes') {
      tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
    }

    return (
      <div>
        <h2>Aplicación de Tareas</h2>
        <input
          type="text"
          value={nuevaTarea}
          onChange={this.handleChange}
          placeholder="Añadir nueva tarea"
        />
        <button onClick={this.agregarTarea}>Añadir</button>
        <div>
          <button onClick={() => this.cambiarFiltro('todas')}>Todas</button>
          <button onClick={() => this.cambiarFiltro('completadas')}>Completadas</button>
          <button onClick={() => this.cambiarFiltro('pendientes')}>Pendientes</button>
        </div>
        <ul>
          {tareasFiltradas.map((tarea, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => this.marcarTarea(index)}
              />
              <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                {tarea.nombre}
              </span>
              <button onClick={() => this.eliminarTarea(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppTareas;
