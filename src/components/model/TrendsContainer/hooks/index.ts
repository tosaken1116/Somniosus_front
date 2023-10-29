import type { Account } from '@/api/@types';

type IUseTrendsContainer = {
  trends: {
    tag: string;
    name: string;
    tweet_count: number;
  }[];
  recommendAccount: Account[];
};

export const useTrendsContainer = (): IUseTrendsContainer => {
  const trends = [
    {
      tag: '#test',
      name: 'test',

      tweet_count: 100,
    },
    {
      tag: '#test1',
      name: 'test2',

      tweet_count: 100,
    },
    {
      tag: '#test2',
      name: 'test2',

      tweet_count: 100,
    },
  ];

  const recommendAccount: Account[] = [
    {
      id: 'test_user',
      image_url: 'https://avatars.githubusercontent.com/u/94045195?v=4',
      name: 'user',
      role: 1,
      description: '',
      birth_day: '2021-09-01',
      website_url: 'localhost:3000',
      follow_count: 0,
      follower_count: 0,
      is_following: false,
    },
    {
      id: 'test_user',
      image_url: 'https://avatars.githubusercontent.com/u/94045195?v=4',
      name: 'user',
      role: 1,
      description: '',
      birth_day: '2021-09-01',
      website_url: 'localhost:3000',
      follow_count: 0,
      follower_count: 0,
      is_following: false,
    },
    {
      id: 'test_user',
      image_url: 'https://avatars.githubusercontent.com/u/94045195?v=4',
      name: 'user',
      role: 1,
      description: '',
      birth_day: '2021-09-01',
      website_url: 'localhost:3000',
      follow_count: 0,
      follower_count: 0,
      is_following: false,
    },
  ];
  return { trends, recommendAccount };
};
