'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface AuthRequiredProps {
  fallback?: React.ReactElement;
  children: React.ReactNode;
}
const AuthRequired = ({ fallback, children }: AuthRequiredProps) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status !== 'authenticated' && !fallback) router.push('/signin');
  }, [session, fallback, router]);

  if (session.status === 'authenticated') return children;
  else return fallback;
};
export default AuthRequired;
