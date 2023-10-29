import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

import { useFavoriteButton } from './hooks';

import { Button } from '@/components/ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

type Props = {
  id: string;
  favorite_count: number;
  is_favorite: boolean;
};

export const FavoriteButton: React.FC<Props> = ({
  id,
  favorite_count,
  is_favorite,
}) => {
  const { handleFavorite } = useFavoriteButton(id);
  return (
    <Tooltip>
      <TooltipTrigger asChild className="p-0">
        <Button
          variant="ghost"
          onClick={(): void => handleFavorite()}
          className={`hover:text-pink-500 ${
            is_favorite ? 'text-pink-500' : ''
          }`}
        >
          {is_favorite ? (
            <MdFavorite size={20} />
          ) : (
            <MdOutlineFavoriteBorder size={20} />
          )}
          <span className="ml-2">
            {favorite_count != 0 ? favorite_count : ' '}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">いいね</TooltipContent>
    </Tooltip>
  );
};
