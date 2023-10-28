import { MediaContainer } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MediaContainer> = {
  component: MediaContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story): JSX.Element => (
      <div className="h-[600px] w-[600px]">{Story()}</div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MediaContainer>;

export const Default: Story = {
  args: {
    medias: [
      'https://avatars.githubusercontent.com/u/94045195?v=4',
      'https://avatars.githubusercontent.com/u/94045195?v=4',
      'https://avatars.githubusercontent.com/u/94045195?v=4',
      'https://avatars.githubusercontent.com/u/94045195?v=4',
    ],
  },
};
