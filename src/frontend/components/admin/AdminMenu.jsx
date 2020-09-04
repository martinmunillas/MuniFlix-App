import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/style/components/admin/AdminMenu.scss';

const AdminMenu = () => {
  return (
    <nav className="adminMenu" >
        <Link to="/admin" className="adminMenu_item">
          Home
        </Link>

        <Link to="/admin/movies" className="adminMenu_item">
          Movies
        </Link>

        <Link to="/admin/series" className="adminMenu_item">
          Series
        </Link>
    </nav>
  );
};

export default AdminMenu;
