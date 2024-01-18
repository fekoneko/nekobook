import AuthRequired from '@/components/AuthRequired';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feed - Nekobook',
};

const FeedPage = () => {
  return (
    <AuthRequired>
      <h1>Feed</h1>
    </AuthRequired>
  );
};
export default FeedPage;
