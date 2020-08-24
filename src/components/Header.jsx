import React from 'react';

import '../assets/style/components/Header.scss';

import logo from '../assets/static/MuniflixLogo.svg'

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" className="logo"/>

      <ul className="menu">
        <li>Home</li>
        <li>Movies</li>
        <li>Series</li>
      </ul>
    </nav>
  );
};

export default Header