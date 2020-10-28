import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/components/Header.scss';
import SearchBar from './SearchBar';

const Header = (props) => {
  return (
    <div className='header-space'>
      <nav className='header'>
        <Link to='/'>
          <img src='/images/MuniflixLogo.svg' alt='' className='logo' />
        </Link>
        <SearchBar onSearch={props.onSearch}/>
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
