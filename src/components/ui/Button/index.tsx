import type { HTMLAttributes, ReactNode } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

import { ROUNDED, type Rounded } from '@/constants/style/rounded';

type Props = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
  rounded?: Rounded;
} & HTMLAttributes<HTMLButtonElement>;
const buttonVariants = cva(
  'p-3 transition-colors hover:bg-white-translucent dark:hover:bg-black-translucent',
  {
    variants: {
      rounded: ROUNDED,
    },
  }
);

export const Button: React.FC<Props> = ({
  startIcon,
  endIcon,
  children,
  rounded = 'full',
  className,
  ...props
}) => (
  <button {...props} className={clsx(className, buttonVariants({ rounded }))}>
    {startIcon && <span>{startIcon}</span>}
    {children}
    {endIcon && <span>{endIcon}</span>}
  </button>
);
