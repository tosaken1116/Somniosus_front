export const mediaClass = (length: number, index: number): string => {
  if (length === 1) return 'row-span-2 col-span-2';
  if (length === 2) return 'row-span-2 col-span-1';
  if (length === 3)
    return index === 0 ? 'row-span-2 col-span-1' : 'row-span-1 col-span-1';
  if (length === 4) return 'row-span-1 col-span-1';
  return '';
};
