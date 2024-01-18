'use client';

import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface AuthRequiredProps {
  children: React.ReactNode;
}
const AuthRequired = ({ children }: AuthRequiredProps) => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth) router.push('/signin');
  }, [auth, router]);

  if (auth) return children;
  else return null;
};
export default AuthRequired;
