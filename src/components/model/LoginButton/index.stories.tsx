import { LoginButtonPresentation  } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginButtonPresentation> = {
  component: LoginButtonPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginButtonPresentation>;

export const Default: Story = {};
