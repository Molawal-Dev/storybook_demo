import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Form from './Form';


const meta = {
  component: Form,
  title: 'Components/Form',
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    background: { control: 'color' },
  },


} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};