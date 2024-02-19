import React, { useState } from 'react';
    
const BuscadorPeliculas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMovies = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=57b548ec`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      setError('Hubo un error al buscar las películas.');
    }

    setLoading(false);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div className="buscador-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar películas..."
          className="search-input"
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>
      
      {loading && <p>Cargando...</p>}
      
      {error && <p>{error}</p>}
      
      {movies.length > 0 && (
        <div className="movies-container">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <div className="movie-details">
                <h3 className="movie-title">{movie.Title}</h3>
                <p className="movie-year">{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuscadorPeliculas;
