import type { FC } from 'react';

import { FaRetweet } from 'react-icons/fa';

import { Typography } from '@/components/ui/Typography';

type Props = {
  userName: string;
};
export const RetweetText: FC<Props> = ({ userName }) => (
  <Typography className="flex flex-row items-center gap-2 pl-9 text-xl text-gray-500">
    <FaRetweet />
    {userName}さんがリツイートしました
  </Typography>
);
