import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/pages/SignIn.scss';

const SignIn = (props) => {
  const [data, setData] = useState({});

  return (
    <div className='signIn'>
      <img src='/images/MuniflixLogo.svg' alt='' />
      <form className='signIn__form'>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Sign In!</button>
        <Link to='/sign-up'>Create Account</Link>
      </form>
    </div>
  );
};

export default SignIn;
