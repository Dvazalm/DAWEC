import React, { Component } from 'react';

class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiempo: 0,
      activo: false
    };
    this.intervalo = null;
  }

  iniciarCronometro = () => {
    this.setState({ activo: true });
    this.intervalo = setInterval(() => {
      this.setState((prevState) => ({
        tiempo: prevState.tiempo + 1
      }));
    }, 1000);
  };

  pausarCronometro = () => {
    this.setState({ activo: false });
    clearInterval(this.intervalo);
  };

  reiniciarCronometro = () => {
    this.setState({ tiempo: 0, activo: false });
    clearInterval(this.intervalo);
  };

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    const { tiempo, activo } = this.state;
    return (
      <div>
        <h2>Cronómetro</h2>
        <p>Tiempo transcurrido: {tiempo} segundos</p>
        <button onClick={activo ? this.pausarCronometro : this.iniciarCronometro}>
          {activo ? 'Pausar' : 'Iniciar'}
        </button>
        <button onClick={this.reiniciarCronometro}>Reiniciar</button>
      </div>
    );
  }
}

export default Cronometro;
