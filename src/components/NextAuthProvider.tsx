import { Session } from 'next-auth';
import { headers } from 'next/headers';
import SessionProviderWrapper from './SessionProviderWrapper';

const getSession = async (cookie: string): Promise<Session> => {
  const response = await fetch(`${process.env.BASE_URL}/api/auth/session`, {
    headers: { cookie },
  });

  const session = await response.json();
  return Object.keys(session).length > 0 ? session : null;
};

interface NextAuthProviderProps {
  children: React.ReactNode;
}
const NextAuthProvider = async ({ children }: NextAuthProviderProps) => {
  const session = await getSession(headers().get('cookie') ?? '');

  return <SessionProviderWrapper session={session}>{children}</SessionProviderWrapper>;
};
export default NextAuthProvider;
