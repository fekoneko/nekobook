'use client';

import { useRouter } from 'next/navigation';

const RedirectToMyPage = () => {
  const auth = { username: '@user' }; // TOFO: authContext
  const router = useRouter();

  if (auth) router.push(`/user/${auth.username}`);
  else router.push('/signin');

  return null;
};
export default RedirectToMyPage;
