import SubButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'SubButton',
  component: SubButton,
} as Meta<typeof SubButton>;

type Story = StoryObj<typeof SubButton>;

export const TestSubBUtton: Story = {
  args: {
    children: '인증번호',
  },
};
