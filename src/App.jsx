import React from 'react';
import Menu from './Menu';
import './App.css';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faFlag, faTriangleExclamation, faWheelchair, faCheckToSlot, faHouse, faBus, faTextSlash, faGavel, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';

const App = () => {

  const brokenReports = [
    {
      icon: faBus,
      title: 'Report Bus Issues',
      description: 'Report Bus experiences to the RIT Urbanism Club',
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
      disabled: "(Coming Soon)"
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
      icon: faCheckToSlot,
      title: 'Share Access Button',
      id: 'button',
      description: 'Let us know what accessible buttons to map first!',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSduHXhny349UYX06VdSjOqLwzaqz0XZKofUE2YZRmN37xTsAQ/viewform?usp=header'
    },
    {
      icon: faChartSimple,
      title: 'Accessibility Statistics',
      description: 'See data about reports of broken things on campus. (Coming Soon)',
      link: '#',
      disabled: "(Coming Soon)"
    },
    {
      icon: faChartSimple,
      title: 'Bus Statistics',
      description: 'See data about the busses on campus. (Coming Soon)',
      link: '#',
      disabled: "(Coming Soon)"
    },
    {
      icon: faUserGroup,
      title: 'Find a Friend',
      description: 'Feeling lonely? Meet someone new! (Coming Eventually)',
      link: '#',
      disabled: "(Coming Eventually)"
    }
  ];
  const links = [
    {
      icon: faHouse,
      title: 'Housing Cost Sheet',
      description: 'Compare Housing Costs',
      link: 'https://docs.google.com/spreadsheets/d/1rMiXzpoBFQjZwccW-A5hu5AWjXx9EZ7jZY0rMU8y4-s/edit'
    },
    {
      icon: faClock,
      title: 'View Dining Hours',
      description: 'View Dining hours',
      link: 'https://tigercenter.rit.edu/tigerCenterApp/api/hours-and-locations'
    },
    {
      icon: faGavel,
      title: 'Civic Action Guide',
      description: 'Getting things done at RIT',
      link: '#',
      disabled: "(Coming soon)"
    },
  ];
  return (
    <div className="app-container">
      <h2 style={{textAlign:'center'}}>Report Jank</h2>
      <Menu items={brokenReports} />
      <h2 style={{textAlign:'center'}}>Cool Utilities</h2>
      <Menu items={menuItems} />
      <h2 style={{textAlign:'center'}}>Other Links</h2>
      <Menu items={links} style="small" />
      <footer className="app-footer">
        <p>This site is part of the Open Source <a href="https://github.com/CampusPulse/">CampusPulse Project</a>. <a href="https://docs.google.com/document/d/1tLtA1JWAWCyU-I9oMHJfNNU0mO2UYU2SZ_ibUw2YlLs/edit?tab=t.0">Learn more about Open Source on RIT's campus</a> or join the <a href="https://fossrit.github.io/">FOSSRIT Community</a></p>
      </footer>
    </div>
  );
};

export default App;
