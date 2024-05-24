import type { Meta, StoryObj } from '@storybook/react';
import  Dropdown  from '../components/Dropdown';


const meta = {
  component: Dropdown,
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    DropdownBg: { control: 'color' },
    dropDownShadow: { control: 'color' },
  },

  tags: ['autodocs'],

} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    DropdownBg: 'grey',
    option1: 'React',
    option2: 'NextJs',
    option3: 'Redux',
    option4: 'Socket.io',
    dropDownShadow: '#171711'
  },
};
