import React from 'react';
import Menu from './Menu';
import './App.css';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faFlag, faTriangleExclamation, faWheelchair, faBus, faTextSlash, faGavel } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';

const App = () => {

  const brokenReports = [
    {
      icon: faBus,
      title: 'Report Bus Delays',
      description: 'Report Bus Delays to the RIT Urbanism Club',
      link: 'https://ggl.link/mybussucks-pulse'
    },
    {
      icon: faTriangleExclamation,
      title: 'RIT Service Request',
      description: 'Report something broken at RIT',
      link: 'https://help.rit.edu'
    },
    {
      icon: faTextSlash,
      title: 'Website Feedback',
      description: 'Found a typo or broken website? Report it here',
      link: 'https://www.rit.edu/website-feedback'
    },
    {
      icon: faFlag,
      title: 'Accessibility Issue',
      description: 'Report broken accessibility hardware. (Coming Soon)',
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
    },
    {
      icon: faChartSimple,
      title: 'Bus Statistics',
      description: 'See data about the busses on campus. (Coming Soon)',
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
    {
      icon: faGavel,
      title: 'Civic Action Guide',
      description: 'A guide for how to get things done at RIT (Coming soon)',
      link: '#',
      enabled: false
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
        <p>This site is part of the Open Source <a href="https://github.com/CampusPulse/">CampusPulse Project</a>. <a href="https://docs.google.com/document/d/1tLtA1JWAWCyU-I9oMHJfNNU0mO2UYU2SZ_ibUw2YlLs/edit?tab=t.0">Learn more about Open Source on RIT's campus</a> or join the <a href="https://fossrit.github.io/">FOSSRIT Community</a></p>
      </footer>
    </div>
  );
};

export default App;
