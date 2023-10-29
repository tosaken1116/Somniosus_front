import * as React from 'react';

import { cn } from '@/libs/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & { startIcon: React.ReactNode }
>(({ className, type, startIcon, ...props }, ref) => (
  <div className="placeholder:text-muted-foreground ring-offset-background border-input flex h-12 w-full flex-row rounded-full  bg-white-hover">
    <span className="flex items-center pl-3 text-center">{startIcon}</span>
    <input
      type={type}
      ref={ref}
      {...props}
      className={cn(
        'flex w-full bg-transparent px-5 py-4 text-lg file:border-0 file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
    />
  </div>
));
Input.displayName = 'Input';

export { Input };
