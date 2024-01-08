import PrimaryButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'PrimaryButton',
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

type Story = StoryObj<typeof PrimaryButton>;

export const PrimaryButtonStory: Story = {
  args: {
    children: '로그인',
  },
};
