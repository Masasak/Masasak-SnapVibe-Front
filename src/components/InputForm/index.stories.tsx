import { Meta, StoryObj } from '@storybook/react';
import InputForm from '.';

export default {
  title: 'InputForm',
  component: InputForm,
} as Meta<typeof InputForm>;

type Story = StoryObj<typeof InputForm>;

export const TestInputFrom: Story = {
  args: {
    buttonContent: '인증번호',
    inputTitle: '전화번호',
  },
};
