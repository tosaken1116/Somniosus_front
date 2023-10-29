import { RetweetButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

import { TooltipProvider } from '@/components/ui/Tooltip';

const meta: Meta<typeof RetweetButton> = {
  component: RetweetButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story): JSX.Element => <TooltipProvider>{Story()}</TooltipProvider>,
  ],
};

export default meta;

type Story = StoryObj<typeof RetweetButton>;

export const Default: Story = {
  args: {
    is_retweet: false,
    retweet_count: 0,
  },
};

export const Retweeted: Story = {
  args: {
    is_retweet: true,
    retweet_count: 1,
  },
};
