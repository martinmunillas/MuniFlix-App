import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../../assets/style/components/admin/AdminMenu.scss';

const AdminMenu = (props) => {
  const pages = {
    home: '/admin',
    movies: '/admin/movies',
    series: '/admin/series',
  };

  const getClasses = (page) => {
    let className = 'adminMenu_item';
    if (
      props.location.pathname === pages[page] ||
      (props.location.pathname.startsWith(pages[page]) && pages[page] !== pages['home'])
    ) {
      className += `--active`;
    }
    return className;
  };

  return (
    <nav className='adminMenu'>
      <Link to='/admin' className={getClasses('home')}>
        Home
      </Link>

      <Link to='/admin/movies' className={getClasses('movies')}>
        Movies
      </Link>

      <Link to='/admin/series' className={getClasses('series')}>
        Series
      </Link>
    </nav>
  );
};

export default withRouter(AdminMenu);
