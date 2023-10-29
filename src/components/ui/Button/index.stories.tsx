import { Button } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Rounded: Story = {
  args: {
    rounded: 'md',
    children: 'Rounded',
  },
};

export const StartIcon: Story = {
  args: {
    startIcon: <span>👋</span>,
    children: 'Start Icon',
  },
};

export const EndIcon: Story = {
  args: {
    endIcon: <span>👋</span>,
    children: 'End Icon',
  },
};
