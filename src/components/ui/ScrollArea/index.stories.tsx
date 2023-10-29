import { ScrollArea } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-32 w-48 border">
      <p className="h-12 p-2">elm1</p>
      <p className="h-12 p-2">elm2</p>
      <p className="h-12 p-2">elm3</p>
      <p className="h-12 p-2">elm4</p>
      <p className="h-12 p-2">elm5</p>
    </ScrollArea>
  ),
};
