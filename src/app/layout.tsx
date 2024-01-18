import ProviderWrapper from '@/components/ProviderWrapper';
import { AuthProvider } from '@/contexts/AuthContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nekobook',
  description: 'Social network for cats',
};

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper providers={[AuthProvider]}>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
