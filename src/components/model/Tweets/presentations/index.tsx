'use client';

import { useTweets } from '../hooks';

import { Item } from './items/tweet';

import type { Tweet } from './items/tweet';

import { ScrollArea } from '@/components/ui/ScrollArea';

export const TweetsPresentation: React.FC = () => {
  const { tweets } = useTweets();
  return (
    <ScrollArea className="h-screen">
      {tweets.map((tweet) => (
        <Item key={tweet.id} tweet={tweet as Tweet} />
      ))}
    </ScrollArea>
  );
};
