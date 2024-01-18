import AuthRequired from '@/components/AuthRequired';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Messenger - Nekobook',
};

interface MessengerLayoutProps {
  children: React.ReactNode;
}
const MessengerLayout = ({ children }: MessengerLayoutProps) => {
  return (
    <AuthRequired>
      <div>Chat List</div>
      <div>{children}</div>
    </AuthRequired>
  );
};
export default MessengerLayout;
