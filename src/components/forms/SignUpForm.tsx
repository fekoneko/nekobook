'use client';

import { useContext } from 'react';
import NavigationButton from '../NavigationButton';
import AuthContext from '@/contexts/AuthContext';

const SignUpForm = () => {
  const { setAuth } = useContext(AuthContext);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <NavigationButton
        href="/feed"
        onClick={() => setAuth({ username: 'fekoneko', accessToken: 'very-secure-token' })}
      >
        (pretend like you signed up)
      </NavigationButton>
    </form>
  );
};
export default SignUpForm;
