'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const UserButton = () => {
  const [hovered, setHovered] = useState(false);
  const session = useSession();
  const router = useRouter();

  if (session.status === 'authenticated')
    return (
      <button
        onClick={() => signOut()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? 'Sign out' : session.data?.user?.name}
      </button>
    );
  else return <button onClick={() => router.push('/signin')}>Sign In</button>;
};
export default UserButton;
