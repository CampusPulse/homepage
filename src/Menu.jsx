import React from 'react';
import './Menu.css'; // Importing CSS for styling

const Menu = ({ items }) => {
  return (
    <div className="menu-container">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
		  className={`menu-button ${item.enabled == false?  ' disabled' : ''}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="menu-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Menu;