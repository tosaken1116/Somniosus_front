import { RxBarChart } from 'react-icons/rx';

import { useImpressionButton } from './hooks';

import { Button } from '@/components/ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

type Props = {
  impression_count: number;
};

export const ImpressionButton: React.FC<Props> = ({ impression_count }) => {
  const { handleImpression } = useImpressionButton();
  return (
    <Tooltip>
      <TooltipTrigger asChild className="p-0">
        <Button
          variant="ghost"
          onClick={(): void => handleImpression()}
          className="hover:text-primary"
        >
          <RxBarChart size={20} />
          <span className="ml-2">
            {impression_count != 0 ? impression_count : ' '}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">表示</TooltipContent>
    </Tooltip>
  );
};
