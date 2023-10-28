import { SideBarPresentation  } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SideBarPresentation> = {
  component: SideBarPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SideBarPresentation>;

export const Default: Story = {};
