import { useState, useEffect } from 'react';
import PaginationComponent from './Paginacion';
import './paginacion.css'

const ParentComponent = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 5; // Ajusta este valor según tus necesidades

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "b070cebc8c59293d8474dce11aa0bec2";
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        setItems(data.results); // Asumiendo que la propiedad "results" contiene los datos de las películas
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Paginated Items</h1>
      <PaginationComponent itemsPerPage={itemsPerPage} items={items} />
    </div>
  );
};

export default ParentComponent;
// sacar el fetch
//dejar solo el componente