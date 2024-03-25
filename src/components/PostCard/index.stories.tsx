import PostCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'PostCard',
  component: PostCard,
} as Meta<typeof PostCard>;

type Story = StoryObj<typeof PostCard>;

export const Primary: Story = {
  args: {
    data: {
      content: 'dd',
      images: '',
      author: {
        id: 'dongwook1207',
        nickname: 'dongwook1207',
        profileImageUrl: '',
        isFollowed: true,
      },
      isHeart: true,
      createdAt: 'ss',
    },
  },
};
