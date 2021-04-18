import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

import { signIn } from "../redux/actions";

import "../assets/style/pages/SignIn.scss";
import { useDispatch } from "react-redux";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [data, setData] = useState<Record<string, string>>({});
  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(data));
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

export default SignIn;
