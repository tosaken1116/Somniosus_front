import { Tabs, TabsContent, TabsList, TabsTrigger } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="recommend" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="recommend">おすすめ</TabsTrigger>
        <TabsTrigger value="following">フォロー中</TabsTrigger>
      </TabsList>
      <TabsContent value="recommend">おすすめ</TabsContent>
      <TabsContent value="following">フォロー中</TabsContent>
    </Tabs>
  ),
};
