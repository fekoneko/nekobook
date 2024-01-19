import AuthRequired from '@/components/AuthRequired';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feed - Nekobook',
};

const FeedPage = () => {
  return (
    <AuthRequired>
      <div className="w-full">
        <h1 className="font-bold text-3xl">Feed</h1>
      </div>
    </AuthRequired>
  );
};
export default FeedPage;
