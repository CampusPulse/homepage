import React from 'react';
import './Menu.css'; // Importing CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({ items }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const highlightedId = queryParams.get('show');

  return (
    <div className="menu-container">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
		      className={`menu-button ${item.disabled !== undefined ?  ' disabled' : ''} ${highlightedId === item.id ? 'highlighted' : ''}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="menu-content">
            <FontAwesomeIcon icon={item.icon} className='fa-2xl' />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Menu;
