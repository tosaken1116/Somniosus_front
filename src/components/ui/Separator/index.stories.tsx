import { Separator } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Separator> = {
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {},
};
