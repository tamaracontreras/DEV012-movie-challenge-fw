import './App.css';
import MovieCatalog from './MovieCatalog'; // Importa el componente MovieCatalog
import PaginationComponent from './Paginacion'



export default function App(){
  return (
    <div className="App">
      <MovieCatalog/>
      <PaginationComponent/>
      
  
    </div>
  )
}