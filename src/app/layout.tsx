import ProviderWrapper from '@/components/ProviderWrapper';
import { AuthProvider } from '@/contexts/AuthContext';
import type { Metadata } from 'next';
import '@/styles/globalStyles.css';

export const metadata: Metadata = {
  title: 'Nekobook',
  description: 'Social network for cats',
};

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html data-theme="dark" lang="en">
      <body className="w-svw h-svh bg-bg-primary text-text-primary">
        <ProviderWrapper providers={[AuthProvider]}>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
