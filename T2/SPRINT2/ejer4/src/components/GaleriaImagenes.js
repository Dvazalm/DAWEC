import React, { Component } from 'react';

class GaleriaImagenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      imagenSeleccionada: null
    };
  }

  componentDidMount() {
    // Realizar petición a la API de imágenes (por ejemplo, Unsplash)
    fetch('https://api.unsplash.com/photos/?client_id=yJ3SQWpFB5lE6G5LQhCxY_LhdceiUeAxVtAHX7dcIPk')
      .then(response => response.json())
      .then(data => {
        this.setState({ imagenes: data });
      })
      .catch(error => console.error('Error al cargar las imágenes:', error));
  }

  abrirModal = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  };

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  };

  render() {
    const { imagenes, imagenSeleccionada } = this.state;
    return (
      <div className="galeria">
        <h2>Galería de Imágenes</h2>
        <div className="imagenes-grid">
          {imagenes.map((imagen) => (
            <img
              key={imagen.id}
              src={imagen.urls.small}
              alt={imagen.alt_description}
              onClick={() => this.abrirModal(imagen)}
            />
          ))}
        </div>
        {imagenSeleccionada && (
          <div className="modal" onClick={this.cerrarModal}>
            <img src={imagenSeleccionada.urls.full} alt={imagenSeleccionada.alt_description} />
          </div>
        )}
      </div>
    );
  }
}

export default GaleriaImagenes;

