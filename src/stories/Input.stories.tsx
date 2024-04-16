import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from '../Components/Input/Input';

const meta = {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<InputProps>;

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'e.g.: Jon Doe'
    },
};

export const WithLabelAndPlaceholder: Story = {
    args: {
        label: 'Name',
        placeholder: 'e.g.: Jon Doe'
    },
};

export const WithLabelAndContent: Story = {
    args: {
        label: 'Name',
        value: 'Jon Doe'
    },
};

export const WithContent: Story = {
    args: {
        value: 'Jon Doe'
    },
};