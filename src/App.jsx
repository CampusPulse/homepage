import React from 'react';
import Menu from './Menu';
import './App.css';

const App = () => {
  const menuItems = [
    {
      title: 'Events',
      description: 'What events are happening on campus',
      link: 'https://campuspulse.meepme.app'
    },
    {
      title: 'RIT Slope Map',
      description: 'Find a route to class that has the flattest slopes to navigate',
      link: 'https://people.rit.edu/rwb4048/'
    },
    {
      title: 'RIT Service Request',
      description: 'Report something broken at RIT',
      link: 'https://help.rit.edu'
    },
    {
      title: 'Accessibility Report',
      description: 'Report Broken Accessible Door Buttons, elevators, etc. (Coming Soon)',
      link: '#',
      enabled: false
    },
    {
      title: 'Accessibility Statistics',
      description: 'See data about reports of broken things on campus. (Coming Soon)',
      link: '#',
      enabled: false
    },
    {
      title: 'Easy Dining Menus',
      description: 'View Dining menus with fewer clicks (coming soon)',
      link: '#',
      enabled: false
    },
    {
      title: 'View Dining Hours',
      description: 'View Dining hours',
      link: 'https://tigercenter.rit.edu/tigerCenterApp/api/hours-and-locations'
    },
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
