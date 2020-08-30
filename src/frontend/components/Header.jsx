import React from 'react';

import '../assets/style/components/Header.scss';

const Header = () => {
  return (
    <nav className="header">
      <img src='/images/MuniflixLogo.svg' alt="" className="logo"/>

      <ul className="menu">
        <li>Home</li>
        <li>Movies</li>
        <li>Series</li>
      </ul>
    </nav>
  );
};

export default Header