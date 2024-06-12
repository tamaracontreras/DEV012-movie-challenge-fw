// MovieCatalog.js
import { useState, useEffect } from 'react';
import { fetchMovies } from './api'; // Asegúrate de que la ruta sea correcta

const MovieCatalog = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchMovies();
        console.log("hello");
        setMovies(movies);
      } catch (error) {
        console.error('Error setting movies:', error);
      }
    };

    getMovies();
  }, []); // Se ejecuta solo una vez al montar el componente
console.log("hola!")
  return (
    <div>
      <h1>Catálogo de películas</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.original_title}</h2>
            <p>Año de lanzamiento: {movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCatalog;
