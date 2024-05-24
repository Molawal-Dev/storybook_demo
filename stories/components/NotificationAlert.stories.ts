import type { Meta, StoryObj } from '@storybook/react';
import NotificationAlert from './NotificationAlert';


const meta = {
  component: NotificationAlert,
  title: 'Components/NotificationAlert',
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    background: { control: 'color' },
    buttonColor: { control: 'color' },
  },

} satisfies Meta<typeof NotificationAlert>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Info: Story = {
  args: {
    message: 'Message sent successfully',
  },
};

export const Warning: Story = {
  args: {
    message: 'This is a warning',
    background: '#a5a519',
  },
};

export const Error: Story = {
  args: {
    message: 'An error has occured!!!!!',
    background: 'red',
  },
};
