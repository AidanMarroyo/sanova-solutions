import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

export const MaxWidthWrapper = ({
  className,
  children,
}: MaxWidthWrapperProps) => {
  return (
    <section
      className={cn(
        'mx-auto max-w-screen-xl px-4  lg:px-6 lg:py-16 bg-transparent',
        className
      )}
    >
      {children}
    </section>
  );
};
