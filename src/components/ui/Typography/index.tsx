import React from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'body1'
  | 'body2'
  | 'caption';

type Props = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'font-bold text-4xl',
      h2: 'font-bold text-3xl',
      h3: 'font-bold text-2xl',
      h4: 'font-bold text-xl',
      h5: 'font-bold text-lg',
      h6: 'font-bold text-base',
      strong: 'font-bold',
      body1: 'font-normal text-base',
      body2: 'font-normal text-sm',
      caption: 'font-normal text-xs',
    },
  },
});

export const Typography: React.FC<Props> = ({
  variant = 'body1',
  className = '',
  children,
}) => {
  const Tag =
    variant === 'strong'
      ? 'strong'
      : variant === 'body1' || variant === 'body2'
      ? 'p'
      : variant;

  return (
    <Tag className={clsx(className, typographyVariants({ variant }))}>
      {children}
    </Tag>
  );
};
