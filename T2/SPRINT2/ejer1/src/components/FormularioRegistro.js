import React, { Component } from 'react';

class FormularioRegistro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: ''
      }
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  validateForm = () => {
    let isValid = true;
    const { username, email, password } = this.state;
    let errors = {};

    // Validación de nombre de usuario
    if (!username.trim()) {
      errors.username = 'El nombre de usuario es requerido';
      isValid = false;
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Correo electrónico inválido';
      isValid = false;
    }

    // Validación de contraseña
    if (password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      // Aquí podrías enviar los datos del formulario a un servidor, etc.
      console.log('Formulario válido, enviando datos...');
    } else {
      console.log('Formulario inválido, por favor corrija los errores.');
    }
  };

  render() {
    const { username, email, password, errors } = this.state;
    return (
      <div>
        <h2>Formulario de Registro</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre de usuario:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              className={errors.username ? 'error' : ''}
            />
            {errors.username && <span className="errorMessage">{errors.username}</span>}
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="errorMessage">{errors.email}</span>}
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="errorMessage">{errors.password}</span>}
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}

export default FormularioRegistro;
