import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  FormButton  from '../components/FormButton';


const meta = {
  component: FormButton,
  title: 'Components/FormButton',
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof FormButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    primary: true,
    label: 'Submit Form',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Submit Form',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    label: 'Submit Form',
  },
};
