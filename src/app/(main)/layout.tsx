import Header from '@/components/mainLayout/Header';
import Sidebar from '@/components/mainLayout/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
