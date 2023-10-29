import { TrendsContainerPresentation  } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TrendsContainerPresentation> = {
  component: TrendsContainerPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TrendsContainerPresentation>;

export const Default: Story = {};
