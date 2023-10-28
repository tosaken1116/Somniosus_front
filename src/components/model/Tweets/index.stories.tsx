import { TooltipProvider } from '@radix-ui/react-tooltip';

import { TweetsPresentation } from './presentations';
import { TweetsErrorPresentation } from './presentations/error';
import { Item as Tweet } from './presentations/items/tweet';
import { TweetsLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TweetsPresentation> = {
  component: TweetsPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story): JSX.Element => <TooltipProvider>{Story()}</TooltipProvider>,
  ],
};

export default meta;

type Story = StoryObj<typeof TweetsPresentation>;

export const Default: Story = {};

export const Error: Story = {
  render: () => <TweetsErrorPresentation />,
};

export const Loading: Story = {
  render: () => <TweetsLoadingPresentation />,
};

export const Item: Story = {
  render: () => (
    <div className="w-screen">
      <Tweet
        tweet={{
          account: {
            id: 'test_user',
            image_url: 'https://avatars.githubusercontent.com/u/94045195?v=4',
            name: 'user',
            role: 1,
          },
          is_bookmark: false,
          is_favorite: true,
          is_retweet: true,
          impression_count: 100,
          reply_count: 100,
          retweet_count: 100,
          favorite_count: 100,
          id: '9bb28458-056a-8a14-afab-8615f7aa0b57',
          content: 'テスト投稿',
          image_url_list: [
            'https://avatars.githubusercontent.com/u/94045195?v=4',
            'https://avatars.githubusercontent.com/u/94045195?v=4',
            'https://avatars.githubusercontent.com/u/94045195?v=4',
            'https://avatars.githubusercontent.com/u/94045195?v=4',
          ],
          created_at: '2023-10-12T02:13:47.336Z',
          reply_to: 'bc2fca8c-c3d4-5200-edba-58858f596b89',
          root: '9aeac4f3-ebb1-703e-8d66-274dd189983b',
          retweet_content: {
            account: {
              id: 'test_user',
              image_url: 'https://avatars.githubusercontent.com/u/94045195?v=4',
              name: 'user',
              role: 1,
            },
            is_bookmark: false,
            is_favorite: true,
            is_retweet: true,
            impression_count: 100,
            reply_count: 100,
            retweet_count: 100,
            favorite_count: 100,
            id: '9bb28458-056a-8a14-afab-8615f7aa0b57',
            content: 'テスト投稿',
            image_url_list: [
              'https://avatars.githubusercontent.com/u/94045195?v=4',
              'https://avatars.githubusercontent.com/u/94045195?v=4',
              'https://avatars.githubusercontent.com/u/94045195?v=4',
              'https://avatars.githubusercontent.com/u/94045195?v=4',
            ],
            created_at: '2023-10-12T02:13:47.336Z',
            reply_to: 'bc2fca8c-c3d4-5200-edba-58858f596b89',
            root: '9aeac4f3-ebb1-703e-8d66-274dd189983b',
            retweet_content: null,
          },
        }}
      />
    </div>
  ),
};

export const Retweet: Story = {
  render: () => (
    <div className="w-screen">
      <Tweet
        tweet={{
          account: {
            id: 'test_user',
            image_url: 'https://avatars.githubusercontent.com/u/94045195?v=4',
            name: 'user',
            role: 1,
          },
          is_bookmark: false,
          is_favorite: true,
          is_retweet: true,
          impression_count: 100,
          reply_count: 100,
          retweet_count: 100,
          favorite_count: 100,
          id: '9bb28458-056a-8a14-afab-8615f7aa0b57',
          content: '',
          image_url_list: [],
          created_at: '2023-10-12T02:13:47.336Z',
          reply_to: 'bc2fca8c-c3d4-5200-edba-58858f596b89',
          root: '9aeac4f3-ebb1-703e-8d66-274dd189983b',
          retweet_content: {
            account: {
              id: 'test_user',
              image_url: 'https://avatars.githubusercontent.com/u/94045195?v=4',
              name: 'user',
              role: 1,
            },
            is_bookmark: false,
            is_favorite: true,
            is_retweet: true,
            impression_count: 100,
            reply_count: 100,
            retweet_count: 100,
            favorite_count: 100,
            id: '9bb28458-056a-8a14-afab-8615f7aa0b57',
            content: 'テスト投稿',
            image_url_list: [
              'https://avatars.githubusercontent.com/u/94045195?v=4',
              'https://avatars.githubusercontent.com/u/94045195?v=4',
              'https://avatars.githubusercontent.com/u/94045195?v=4',
              'https://avatars.githubusercontent.com/u/94045195?v=4',
            ],
            created_at: '2023-10-12T02:13:47.336Z',
            reply_to: 'bc2fca8c-c3d4-5200-edba-58858f596b89',
            root: '9aeac4f3-ebb1-703e-8d66-274dd189983b',
            retweet_content: null,
          },
        }}
      />
    </div>
  ),
};
