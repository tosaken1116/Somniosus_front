import { Typography } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'H1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'H2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'H3',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'H4',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'H5',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'H6',
  },
};

export const Strong: Story = {
  args: {
    variant: 'strong',
    children: 'Strong',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body1',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body2',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption',
  },
};
