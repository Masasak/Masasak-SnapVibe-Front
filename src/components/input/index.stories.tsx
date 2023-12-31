import Input from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
 title: 'input',
 component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const PasswordInput: Story = {
 args: {
  inputTitle: '비밀번호',
  inputWidth: 'long',
 },
};

export const IdInput: Story = {
 args: {
  inputTitle: '아이디',
 },
};
