import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Import your icon components here
import DarkModeIcon from '/images/bright-mode.png';

const Navbar = () => {
  const iconStyle = { width: '20px', height: '20px' };
  

  return (
    <nav>
      <h1>unveil</h1>
      <ul className='listing'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/add'>Add Confession</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <div className="icons">
      </div>
    </nav>
  );
};

export default Navbar;
