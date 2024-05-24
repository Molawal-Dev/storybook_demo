import type { Meta, StoryObj } from '@storybook/react';
import  ProductCard  from '../components/ProductCard';


const meta = {
  component: ProductCard,
  title: 'Components/ProductCard',
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    // DropdownBg: { control: 'color' },
  },

  tags: ['autodocs'],

} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    title: 'HartBeeSport',
    price: 100,
    rating: 4
  },
};