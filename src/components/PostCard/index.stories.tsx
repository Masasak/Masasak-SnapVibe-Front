import PostCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'PostCard',
  component: PostCard,
} as Meta<typeof PostCard>;

type Story = StoryObj<typeof PostCard>;

export const Primary: Story = {};
