// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import MovieList from './componentes/MovieList.js'; // Ajustamos la ruta de importación

const ObtenerPeliculas = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/{movie_id}'); // Reemplaza 'url_de_tu_api' con la URL de tu API
        const data = await response.json();
        setMovies(data.Search); 
        console.log('Datos de la API:', data); // Supongamos que la API devuelve un objeto con una propiedad 'Search' que es un array de películas
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  return (
    <MovieList movies={movies} /> // Renderizamos MovieList con las películas obtenidas
  );
};

export default ObtenerPeliculas;
