

import React from 'react';
import ReactDOM from 'react-dom';
import '/src/App.css';
import MovieCatalog from '/src/MovieCatalog.js'; // Importa el componente MovieCatalog

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <MovieCatalog /> {/* Incluye el componente MovieCatalog aquí */}
  </React.StrictMode>
);

// export default function App(){
//   return (
//     <div className="App">
//       <MovieCatalog/>
//     </div>
//   )
// }