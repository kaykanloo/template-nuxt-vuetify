import type { Meta, StoryObj } from '@storybook/vue3'
import MessageBox from '~/components/MessageBox.vue';

const meta: Meta<typeof MessageBox> = {
  component: MessageBox,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof MessageBox>;

export const Default: Story = {
  args: {
    message: 'Hello World!',
  },
};