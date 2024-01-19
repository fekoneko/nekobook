import SignUpForm from '@/components/forms/SignUpForm';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Up - Nekobook',
};

const SignUpPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-2">
      <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
      <SignUpForm />
      <p>
        Already have an account? <Link href="/signin">Sign In</Link>
      </p>
    </div>
  );
};
export default SignUpPage;
