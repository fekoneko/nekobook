'use client';

import { useRouter } from 'next/navigation';

interface NavigationButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href: string;
}
const NavigationButton = ({ href, children, onClick, ...buttonProps }: NavigationButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={(e) => {
        onClick && onClick(e);
        router.push(href);
      }}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
export default NavigationButton;
