import { PostTweetPresentation  } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostTweetPresentation> = {
  component: PostTweetPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PostTweetPresentation>;

export const Default: Story = {};
