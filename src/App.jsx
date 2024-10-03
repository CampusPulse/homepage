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

  return <Menu items={menuItems} />;
};

export default App;
