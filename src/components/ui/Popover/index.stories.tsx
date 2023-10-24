import { useState } from 'react';

import { Popover, PopoverContent, PopoverTrigger } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <Popover open={open}>
        <PopoverTrigger
          asChild
          onMouseEnter={(): void => setOpen(true)}
          onMouseLeave={(): void => setOpen(false)}
        >
          <button>Open popover</button>
        </PopoverTrigger>
        <PopoverContent
          className="-m-2 w-80"
          onMouseEnter={(): void => setOpen(true)}
          onMouseLeave={(): void => setOpen(false)}
        >
          <p>popover is open!</p>
        </PopoverContent>
      </Popover>
    );
  },
};
