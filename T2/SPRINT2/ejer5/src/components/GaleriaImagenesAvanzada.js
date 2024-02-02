// GaleriaImagenesAvanzada.js

import React, { Component } from 'react';
import './App.css'; // Importamos el CSS

class GaleriaImagenesAvanzada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      imagenSeleccionada: null,
      pagina: 1,
      terminosBusqueda: '',
      cargando: true
    };
  }

  componentDidMount() {
    this.cargarImagenes();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  cargarImagenes = () => {
    const { pagina, terminosBusqueda } = this.state;
    const porPagina = 6; // Limitamos a 6 imágenes por página
    let url = `https://api.unsplash.com/photos/?page=${pagina}&per_page=${porPagina}&client_id=yJ3SQWpFB5lE6G5LQhCxY_LhdceiUeAxVtAHX7dcIPk`;

    if (terminosBusqueda) {
      url = `https://api.unsplash.com/search/photos?page=${pagina}&query=${terminosBusqueda}&per_page=${porPagina}&client_id=yJ3SQWpFB5lE6G5LQhCxY_LhdceiUeAxVtAHX7dcIPk`;
    }

    this.setState({ cargando: true });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ imagenes: [] }); // Eliminamos las imágenes anteriores
        if (pagina === 1) {
          this.setState({ imagenes: data.results || data });
        } else {
          this.setState(prevState => ({
            imagenes: [...prevState.imagenes, ...(data.results || data)]
          }));
        }
        this.setState({ cargando: false });
      })
      .catch(error => console.error('Error al cargar las imágenes:', error));
  };

  handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
      !this.state.cargando
    ) {
      this.cargarMasImagenes();
    }
  };

  cargarMasImagenes = () => {
    this.setState(prevState => ({ pagina: prevState.pagina + 1 }), this.cargarImagenes);
  };

  cargarImagenesAnteriores = () => {
    if (this.state.pagina > 1) {
      this.setState(prevState => ({ pagina: prevState.pagina - 1 }), this.cargarImagenes);
    }
  };

  handleChange = (e) => {
    this.setState({ terminosBusqueda: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ pagina: 1 }, this.cargarImagenes);
  };

  abrirModal = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  };

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  };

  render() {
    const { imagenes, imagenSeleccionada, cargando, terminosBusqueda } = this.state;
    return (
      <div className="galeria">
        <h2>Galería de Imágenes Avanzada</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={terminosBusqueda}
            onChange={this.handleChange}
            placeholder="Buscar imágenes..."
          />
          <button type="submit">Buscar</button>
        </form>
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
        {cargando && <p>Cargando...</p>}
        {imagenSeleccionada && (
          <div className="modal" onClick={this.cerrarModal}>
            <img src={imagenSeleccionada.urls.full} alt={imagenSeleccionada.alt_description} />
          </div>
        )}
        <div className="botones">
          <button onClick={this.cargarImagenesAnteriores} disabled={this.state.pagina === 1 || cargando}>Cargar imágenes anteriores</button>
          <button onClick={this.cargarMasImagenes} disabled={cargando}>Cargar imágenes siguientes</button>
        </div>
      </div>
    );
  }
}

export default GaleriaImagenesAvanzada;
