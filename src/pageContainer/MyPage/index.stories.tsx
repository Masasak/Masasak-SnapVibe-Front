import MyPage from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'MyPage',
  component: MyPage,
} as Meta<typeof MyPage>;

type Story = StoryObj<typeof MyPage>;

export const Primary: Story = {};
