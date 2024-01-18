import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Messenger - Nekobook',
};

interface MessengerLayoutProps {
  children: React.ReactNode;
}
const MessengerLayout = ({ children }: MessengerLayoutProps) => {
  return (
    <>
      <div>Chat List</div>
      <div>{children}</div>
    </>
  );
};
export default MessengerLayout;
