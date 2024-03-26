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
        id: 'dongwook1207',
        nickName: 'dongwook1207',
        name: '이동욱',
        followers: 1000,
        followings: 199,
      },
    },
  },
};
