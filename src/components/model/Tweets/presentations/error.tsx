import { Typography } from '@/components/ui/Typography';

export const TweetsErrorPresentation: React.FC = () => (
  <div className="w-full p-4">
    <Typography className="text-center text-gray-500">
      問題が発生しました 再読み込みしてください
    </Typography>
  </div>
);
