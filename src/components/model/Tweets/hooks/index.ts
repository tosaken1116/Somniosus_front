import { useSuspenseQuery } from '@tanstack/react-query';

import type { GetTweetResponse } from '@/api/@types';

import { apiClient } from '@/libs/apiClients';

type IUseTweets = {
  tweets: GetTweetResponse['timeline'];
};

const fetcher = async (): Promise<GetTweetResponse> => {
  const d = await apiClient.tweets.get.timeline.$get({});
  return d;
};

export const useTweets = (): IUseTweets => {
  const {
    data: { timeline },
  } = useSuspenseQuery<GetTweetResponse>({
    queryKey: ['timeline'],
    queryFn: fetcher,
  });
  return { tweets: timeline };
};
