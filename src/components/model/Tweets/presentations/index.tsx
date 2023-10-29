'use client';

import { useTweets } from '../hooks';

import { Item } from './items/tweet';

import type { Tweet } from './items/tweet';

import { Separator } from '@/components/ui/Separator';

export const TweetsPresentation: React.FC = () => {
  const { tweets } = useTweets();
  return (
    <div>
      {tweets.map((tweet) => (
        <>
          <Item key={tweet.id} tweet={tweet as Tweet} />
          <Separator className="h-[3px] bg-white-hover " />
        </>
      ))}
    </div>
  );
};
