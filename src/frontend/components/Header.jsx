import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/components/Header.scss';

const Header = () => {
  return (
    <div className='header-space'>
      <nav className='header'>
        <Link to='/'>
          <img src='/images/MuniflixLogo.svg' alt='' className='logo' />
        </Link>

        {/* <ul className='menu'>
          <li>Home</li>
          <li>Movies</li>
          <li>Series</li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Header;
