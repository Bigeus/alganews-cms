import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '../Components/Button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ButtonProps>;


export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'PrimaryButton'
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'DangerButton'
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'TextButton'
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'DisabledButton',
    disabled: true
  },
};