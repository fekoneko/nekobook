import type { Metadata } from 'next';
import '@/styles/globalStyles.css';
import NextAuthProvider from '@/components/NextAuthProvider';

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
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
