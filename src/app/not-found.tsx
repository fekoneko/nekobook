import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not Found - Nekobook',
};

const NotFoundPage = () => {
  return (
    <>
      <h1>Page not found</h1>
      <h2>Look somewhere else, myew.</h2>
      <Link href="/">Return to homepage</Link>
    </>
  );
};
export default NotFoundPage;
