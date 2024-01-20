'use client';

import { signIn } from 'next-auth/react';

const OAuthButton = () => {
  return <button onClick={() => signIn()}>Use OAuth</button>;
};
export default OAuthButton;
