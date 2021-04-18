import React from "react";
import { Link } from "react-router-dom";

import "../assets/style/components/Header.scss";

const Header = ({}) => {
  return (
    <div className='header-space'>
      <nav className='header'>
        <Link to='/'>
          <img src='/images/MuniflixLogo.svg' alt='' className='logo' />
        </Link>
        <ul className='menu'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/list/movies'>
            <li>Movies</li>
          </Link>
          <Link to='/list/series'>
            <li>Series</li>
          </Link>
          <Link to='/search'>
            <li>
              <img src='https://i.ibb.co/gvb0HpN/buscar.png' alt='Search' />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
