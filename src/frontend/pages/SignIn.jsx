import React, { useState } from 'react';

import { signIn } from '../redux/actions';

import '../assets/style/pages/SignIn.scss';
import { connect } from 'react-redux';

const SignIn = (props) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn(data);
  };

  return (
    <div className='signIn'>
      <img src='/images/MuniflixLogo.svg' alt='' />
      <form className='signIn__form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={data.email}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={data.password}
          onChange={handleChange}
        />
        <button type='submit'>Sign In!</button>
      </form>
    </div>
  );
};

const mapDispatch = {
  signIn,
};

export default connect(null, mapDispatch)(SignIn);
