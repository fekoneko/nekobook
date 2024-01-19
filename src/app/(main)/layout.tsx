import Header from '@/components/mainLayout/Header';
import Sidebar from '@/components/mainLayout/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="flex grow">
        <Sidebar />
        <main className="flex grow">
          <div className="grow">{children}</div>
        </main>
      </div>
    </div>
  );
}
