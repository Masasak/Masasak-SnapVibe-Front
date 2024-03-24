import { Meta, StoryObj } from '@storybook/react';
import MyPageUserInfo from '.';

export default {
  title: 'MyPageUserInfo',
  component: MyPageUserInfo,
} as Meta<typeof MyPageUserInfo>;

type Story = StoryObj<typeof MyPageUserInfo>;

export const Primary: Story = {
  args: {
    coverImgUrl: '',
  },
};
