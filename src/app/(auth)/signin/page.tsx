import SignInForm from '@/components/forms/SignInForm';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign In - Nekobook',
};

const SignInPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-2">
      <h1 className="text-3xl font-bold mb-2">Sign In</h1>
      <SignInForm />
      <p>
        Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
      </p>
    </div>
  );
};
export default SignInPage;
