import type { FC } from 'react';
import React from 'react';

export const YIcon: FC<{
  size?: number;
  className?: string;
}> = ({ size = 50, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 164 170"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="10"
      y="80"
      fontSize="320"
      fontFamily="Arial"
      fontWeight="bold"
      fill="white"
    >
      𝕪
    </text>
  </svg>
);
