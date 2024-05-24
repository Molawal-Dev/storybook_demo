import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Dropdown  from '../components/Dropdown';


const meta = {
  component: Dropdown,
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    DropdownBg: { control: 'color' },
  },

  tags: ['autodocs'],

} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    option1: 'React',
    option2: 'NextJs',
    option3: 'Redux',
    option4: 'Socket.io',
    dropDownShadow: 'yellow'
  },
};
