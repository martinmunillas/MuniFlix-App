import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/pages/NotFound.scss';

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1 className='notFound_number'>404</h1>
      <h2 className='notFound_text'>Not Found</h2>
      <button className='notFound_button'>
        <Link to='/'>Go to Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
