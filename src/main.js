import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/App.js';
import '/src/App.css';
import MovieCatalog from '/src/MovieCatalog.js'; // Importa el componente MovieCatalog

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MovieCatalog /> {/* Incluye el componente MovieCatalog aquí */}
  </React.StrictMode>
);
