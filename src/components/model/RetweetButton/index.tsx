import { FaRetweet } from 'react-icons/fa';

import { useRetweetButton } from './hooks';

import { Button } from '@/components/ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

type Props = {
  id: string;
  retweet_count: number;
  is_retweet: boolean;
};

export const RetweetButton: React.FC<Props> = ({
  id,
  retweet_count,
  is_retweet,
}) => {
  const { handleRetweet } = useRetweetButton(id);
  return (
    <Tooltip>
      <TooltipTrigger asChild className="p-0">
        <Button
          variant="ghost"
          onClick={(): void => handleRetweet()}
          className={`hover:text-green-500 ${
            is_retweet ? 'text-green-500' : ''
          }`}
        >
          <FaRetweet size={20} />
          <span className="ml-2">
            {retweet_count != 0 ? retweet_count : ' '}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">リツイート</TooltipContent>
    </Tooltip>
  );
};
