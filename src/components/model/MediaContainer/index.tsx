import Image from 'next/image';

import { mediaClass } from './logic';

import { Button } from '@/components/ui/Button';

type Props = {
  medias: string[];
};

export const MediaContainer: React.FC<Props> = ({ medias }) => (
  <div className="grid aspect-video w-full grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-md">
    {medias.map((media, i) => (
      <Button
        key={media}
        variant="ghost"
        className={`relative h-full w-full ${mediaClass(medias.length, i)}`}
      >
        <Image fill objectFit="cover" src={media} alt="media" />
      </Button>
    ))}
  </div>
);
