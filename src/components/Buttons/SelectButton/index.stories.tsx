import SelectButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'SelectButton',
  component: SelectButton,
  parameters: {
    backgrounds: {
      default: 'dark', // 각 스토리에 배경을 dark로 설정
    },
  },
} as Meta<typeof SelectButton>;

type Story = StoryObj<typeof SelectButton>;

export const Primary: Story = {
  args: {
    children: '잔인함 ',
  },
};

export const Secondary: Story = {
  args: {
    children: '성적임 ( 부적절한 발언이나 성적인 이미지를 유포한 경우 )',
  },
};
