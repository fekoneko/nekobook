'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import OAuthButton from './OAuthButton';

const SignUpForm = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'authenticated') router.push('/feed');
  }, [session, router]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}></form>
      <OAuthButton />
    </>
  );
};
export default SignUpForm;
