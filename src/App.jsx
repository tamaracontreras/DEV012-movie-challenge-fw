// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import MovieList from '../componentes/MovieList.js';
import obtenerPeliculas from './api/obtener.js'; // Importamos la función para obtener películas

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerPeliculas(); // Llamamos a la función para obtener películas
        setMovies(data.results); // Asignamos los resultados al estado 'movies'
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="card">
        <MovieList movies={movies} /> {/* Pasamos 'movies' como prop al componente MovieList */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
