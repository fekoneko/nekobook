'use client';

import { signIn } from 'next-auth/react';

const NextAuthButton = () => {
  return <button onClick={() => signIn()}>Use Next Auth</button>;
};
export default NextAuthButton;
