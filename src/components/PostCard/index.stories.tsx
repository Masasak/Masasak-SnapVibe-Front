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
      isLiked: true,
      postImgUrl:
        'https://i.namu.wiki/i/kZ7tWSGl2Y5JbYfQyyE4b0UU6YYtlQ8ep-snNnPY6pPVXPDQ4nvs2GEr0LQj6WrNlzVEBxA1WHr7pcQV4nMuIQ.webp',
      profileImgUrl:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRGeI6%2Fbtq21db32du%2F84vjG2iZc3H6iuYnUKkb7k%2Fimg.jpg',
      userId: 'sexymand123',
      isFollowed: false,
    },
  },
};
