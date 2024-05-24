import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal';


const meta = {
  component: Modal,
  title: 'Components/Modal',
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],


} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;


export const PrimaryModal: Story = {
  args: {},
};

