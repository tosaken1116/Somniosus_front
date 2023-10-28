import { TooltipProvider } from '@radix-ui/react-tooltip';

import { FavoriteButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FavoriteButton> = {
  component: FavoriteButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story): JSX.Element => <TooltipProvider>{Story()}</TooltipProvider>,
  ],
};

export default meta;

type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: {
    is_favorite: false,
    favorite_count: 0,
    id: '12345678',
  },
};

export const Favorite: Story = {
  args: {
    is_favorite: true,
    favorite_count: 1,
    id: '12345678',
  },
};
