import { ReplyButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

import { TooltipProvider } from '@/components/ui/Tooltip';

const meta: Meta<typeof ReplyButton> = {
  component: ReplyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story): JSX.Element => <TooltipProvider>{Story()}</TooltipProvider>,
  ],
};

export default meta;

type Story = StoryObj<typeof ReplyButton>;

export const Default: Story = {
  args: {
    reply_count: 0,
  },
};
