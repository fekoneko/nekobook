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
      <div className="w-full h-full flex py-2 pr-3 gap-2">
        <div className="w-60 rounded-lg border-2 border-bg-accent">Chats List</div>
        <div className="grow rounded-lg border-2 border-bg-accent">{children}</div>
      </div>
    </AuthRequired>
  );
};
export default MessengerLayout;
