// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes para la validación de props

const Card = ({ primerResultado }) => {
  return (
    <div className="card">
      <img src={primerResultado.Poster} alt={primerResultado.Title} />
      <div className="card-body">
        <h4>{primerResultado.Title}</h4>
        <p>{primerResultado.Year}</p>
      </div>  
    </div>
  );
};

// Definimos PropTypes para validar las props
Card.propTypes = {
  primerResultado: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string
  }).isRequired
};

export default Card;
