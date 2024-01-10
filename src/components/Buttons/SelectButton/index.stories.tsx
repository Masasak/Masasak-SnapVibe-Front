import SelectButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'SelectButton',
  component: SelectButton,
} as Meta<typeof SelectButton>;

type Story = StoryObj<typeof SelectButton>;

export const Primary: Story = {
  args: {
    children: '잔인함 ( 부적절한 이미지나 혐오적인 이미지을 올린 경우 )',
  },
};

export const Secondary: Story = {
  args: {
    children: '성적임 ( 부적절한 발언이나 성적인 이미지를 유포한 경우 )',
  },
};
