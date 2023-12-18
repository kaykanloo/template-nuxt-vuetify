import type { Meta, StoryObj } from '@storybook/vue3'
import TextBox from '~/components/TextBox.vue';

const meta: Meta<typeof TextBox> = {
  component: TextBox,
  argTypes: {
    label: {
      description: 'Label for the text box',
      control: {
        type: 'text'
      }
    },
    modelValue: {
      description: 'Value of the text box',
      defaultValue: 'Value',
      control: {
        type: 'text'
      }
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  args: {
    label: 'Label',
    modelValue: 'Value',
  },
};