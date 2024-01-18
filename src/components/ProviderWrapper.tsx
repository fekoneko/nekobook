'use client';

import { createElement } from 'react';

interface ProviderWrapperProps {
  providers: (React.FunctionComponent<any> | React.ComponentClass<any>)[];
  children: React.ReactNode;
}
const ProviderWrapper = ({ providers, children }: ProviderWrapperProps) => {
  return providers.reduceRight<React.ReactNode>(
    (previousChildren, provider) => createElement(provider, undefined, previousChildren),
    children
  );
};
export default ProviderWrapper;
