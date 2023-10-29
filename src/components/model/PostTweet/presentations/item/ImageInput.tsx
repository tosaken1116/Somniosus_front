import type { ChangeEvent, FC } from 'react';

import { GoImage } from 'react-icons/go';

export const CustomFileInput: FC<{
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ onChange }) => (
  <div>
    <label htmlFor="fileInput" className="cursor-pointer text-primary">
      <GoImage size={24} />
    </label>
    <input
      id="fileInput"
      type="file"
      style={{ display: 'none' }}
      onChange={onChange}
    />
  </div>
);
