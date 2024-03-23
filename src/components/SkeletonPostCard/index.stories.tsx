import SkeletonPostCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'SkeletonPostCard',
  component: SkeletonPostCard,
} as Meta<typeof SkeletonPostCard>;

type Story = StoryObj<typeof SkeletonPostCard>;

export const Primary: Story = {};
