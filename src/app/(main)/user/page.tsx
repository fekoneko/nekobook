'use client';

import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RedirectToMyPage = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth) router.push(`/user/${auth.username}`);
    else router.push('/signin');
  });

  return null;
};
export default RedirectToMyPage;
