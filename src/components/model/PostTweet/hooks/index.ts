import type { ChangeEvent } from 'react';
import { useState, useTransition } from 'react';

import { useMutation } from '@tanstack/react-query';

import type {
  Account,
  CreateTweetPayload,
  CreateTweetResponse,
} from '@/api/@types';

import { uploadImage } from '@/hooks/useImageUpload';
import { apiClient } from '@/libs/apiClients';

type IUsePostTweet = {
  handlePost: () => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  pending: boolean;
  account: Account;
  tweetAble: boolean;
};

const fetcher = async (
  body: CreateTweetPayload
): Promise<CreateTweetResponse> => await apiClient.tweets.post.$post({ body });

export const usePostTweet = (): IUsePostTweet => {
  const [content, setContent] = useState('');
  const [pending, startTransition] = useTransition();
  const [file, setFile] = useState<File>();
  const account: Account = {
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
  };
  const { mutate: postTweet } = useMutation({ mutationFn: fetcher });
  const handlePost = (): void => {
    postTweet({ content, image_url_list: [] });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(e.target.value);
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>): void => {
    setFile(e.target?.files?.[0]);
    if (!file) return;

    const form = new FormData();

    form.append('fileUpload', file);
    startTransition(() => uploadImage(form));
  };

  return {
    handlePost,
    handleChange,
    handleSelect,
    pending,
    account,
    tweetAble: content.length > 0,
  };
};
