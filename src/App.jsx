import React from 'react';
import Menu from './Menu';
import './App.css';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faFlag, faTriangleExclamation, faUtensils, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';

const App = () => {

  const brokenReports = [
    {
      icon: faTriangleExclamation,
      title: 'RIT Service Request',
      description: 'Report something broken at RIT',
      link: 'https://help.rit.edu'
    },
    {
      icon: faFlag,
      title: 'Accessibility Report',
      description: 'Report Broken Accessible Door Buttons, elevators, etc. (Coming Soon)',
      link: '#',
      enabled: false
    },
  ]

  const menuItems = [
    {
      icon: faCalendar,
      title: 'Events',
      description: 'What events are happening on campus',
      link: 'https://events.campuspulse.app/'
    },
    {
      icon: faWheelchair,
      title: 'RIT Slope Map',
      description: 'Find a route to class that has the flattest slopes to navigate',
      link: 'https://people.rit.edu/rwb4048/'
    },
    {
      icon: faChartSimple,
      title: 'Accessibility Statistics',
      description: 'See data about reports of broken things on campus. (Coming Soon)',
      link: '#',
      enabled: false
    }
  ];
  const links = [
    {
      icon: faClock,
      title: 'View Dining Hours',
      description: 'View Dining hours',
      link: 'https://tigercenter.rit.edu/tigerCenterApp/api/hours-and-locations'
    },
  ];
  return (
    <div className="app-container">
      <h2 style={{textAlign:'center'}}>Report Jank</h2>
      <Menu items={brokenReports} />
      <h2 style={{textAlign:'center'}}>Cool Utilities</h2>
      <Menu items={menuItems} />
      <h2 style={{textAlign:'center'}}>Other Helpful Links</h2>
      <Menu items={links} />
      <footer className="app-footer">
        <p>This site is part of the <a href="https://github.com/CampusPulse/">CampusPulse Project</a>, which is Open Source</p>
      </footer>
    </div>
  );
};

export default App;
