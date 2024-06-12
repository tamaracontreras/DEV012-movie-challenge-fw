
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './paginacion.css';

const PaginationComponent = ({ itemsPerPage, items }) => {
 
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    console.log(items);
    const startIndex = (currentPage - 1) * itemsPerPage;
    console.log(startIndex);
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(items.slice(startIndex, endIndex));
  }, [currentPage, items, itemsPerPage]);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="pagination-container">
        <ul className="pagination-list">
        
          {Array.from({ length: totalPages }, (_, index) => (
            
            <li key={index} className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button
                className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handleClick(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PaginationComponent.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

PaginationComponent.defaultProps = {
  itemsPerPage: 10, // Valor predeterminado si no se pasa uno
  items: [], // Valor predeterminado si no se pasan items
};

export default PaginationComponent;
