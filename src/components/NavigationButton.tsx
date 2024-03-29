'use client';

import { useRouter } from 'next/navigation';

interface NavigationButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href: string;
}
const NavigationButton = ({ href, ...buttonProps }: NavigationButtonProps) => {
  const router = useRouter();

  return (
    <button
      {...buttonProps}
      onClick={(e) => {
        buttonProps.onClick && buttonProps.onClick(e);
        router.push(href);
      }}
    />
  );
};
export default NavigationButton;
