import { ImpressionButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

import { TooltipProvider } from '@/components/ui/Tooltip';

const meta: Meta<typeof ImpressionButton> = {
  component: ImpressionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story): JSX.Element => <TooltipProvider>{Story()}</TooltipProvider>,
  ],
};

export default meta;

type Story = StoryObj<typeof ImpressionButton>;

export const Default: Story = {
  args: {
    impression_count: 0,
  },
};
