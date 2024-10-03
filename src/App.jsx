import React from 'react';
import Menu from './Menu';

const App = () => {
  const menuItems = [
    {
      title: 'Home',
      description: 'Go to the homepage',
      link: '/'
    },
    {
      title: 'About',
      description: 'Learn more about us',
      link: '/about'
    },
    {
      title: 'Contact',
      description: 'Get in touch with us',
      link: '/contact'
    }
  ];
  return (
    <div className="app-container">
      <Menu items={menuItems} />
      <footer className="app-footer">
        <p>This site is part of the <a href="https://github.com/CampusPulse/">CampusPulse Project</a>, which is Open Source</p>
      </footer>
    </div>
  );
};

export default App;
