import { FaRegComment } from 'react-icons/fa';

import { useReplyButton } from './hooks';

import { Button } from '@/components/ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

type Props = {
  id: string;
  reply_count: number;
};

export const ReplyButton: React.FC<Props> = ({ id, reply_count }) => {
  const { handleReply } = useReplyButton(id);
  return (
    <Tooltip>
      <TooltipTrigger asChild className="p-0">
        <Button
          variant="ghost"
          onClick={(): void => handleReply()}
          className="hover:text-primary"
        >
          <FaRegComment size={20} />
          <span className="ml-2">{reply_count != 0 ? reply_count : ' '}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">返信</TooltipContent>
    </Tooltip>
  );
};
