'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RedirectToMyPage = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.data?.user?.name !== undefined) router.push(`/user/${session.data?.user?.name}`);
    // TODO: add @username to DEFENITELY determine user
    else router.push('/signin');
  });

  return null;
};
export default RedirectToMyPage;
