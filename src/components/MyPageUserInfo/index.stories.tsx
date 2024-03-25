import { Meta, StoryObj } from '@storybook/react';
import MyPageUserInfo from '.';

export default {
  title: 'MyPageUserInfo',
  component: MyPageUserInfo,
} as Meta<typeof MyPageUserInfo>;

type Story = StoryObj<typeof MyPageUserInfo>;

export const Primary: Story = {
  args: {
    data: {
      user: {
        id: 'dongwoo1206',
        name: 'dongwook1206',
        nickName: 'dongwook1207',
        followers: 100,
        followings: 100,
        profileCoverImage: '',
        profileImageUrl: '',
      },
    },
  },
};
