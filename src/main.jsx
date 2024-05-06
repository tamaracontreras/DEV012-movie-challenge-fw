import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import Card from './componentes/card.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card primerResultado={{ Poster: 'url_de_la_imagen', Title: 'Título de la película', Year: 'Año de lanzamiento' }} />
  </React.StrictMode>,
)
