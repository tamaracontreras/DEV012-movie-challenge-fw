// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
// Asegúrate de tener la ruta correcta para Card

const MovieList = ({ movies }) => {
  return (
    <div>
      <h1>Listado de Películas</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <Card key={index} primerResultado={movie} />
        ))}
      </div>
    </div>
  );
};
// Validación de PropTypes para 'movies'
MovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        Title: PropTypes.string,
        Poster: PropTypes.string,
        Year: PropTypes.string
      })
    ).isRequired
  };

export default MovieList;
