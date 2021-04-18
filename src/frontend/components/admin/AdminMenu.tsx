import React from "react";
import { Link, useLocation, withRouter } from "react-router-dom";

import "../../assets/style/components/admin/AdminMenu.scss";

const AdminMenu = ({}) => {
  const location = useLocation();
  const pages = {
    home: "/admin",
    movies: "/admin/movies",
    series: "/admin/series",
  };

  const getClasses = (page: keyof typeof pages) => {
    let className = "adminMenu_item";
    if (
      location.pathname === pages[page] ||
      (location.pathname.startsWith(pages[page]) &&
        pages[page] !== pages["home"])
    ) {
      className += `--active`;
    }
    return className;
  };

  return (
    <nav className='adminMenu'>
      <Link to='/admin' className={getClasses("home")}>
        Home
      </Link>

      <Link to='/admin/movies' className={getClasses("movies")}>
        Movies
      </Link>

      <Link to='/admin/series' className={getClasses("series")}>
        Series
      </Link>
    </nav>
  );
};

export default withRouter(AdminMenu);
