import type { Meta, StoryObj } from '@storybook/react';
import ValueDescriptor, { ValueDescriptorProps } from '../Components/ValueDescriptor/ValueDescriptor';

const meta = {
    title: 'Example/ValueDescriptor',
    component: ValueDescriptor,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ValueDescriptorProps>;

export const Default: Story = {
    args: {
        description: 'ganhos na semana',
        value: 560322.02,
        isCurrency: false,
        color: 'default',
    },
};

export const DefaultCurrency: Story = {
    args: {
        description: 'ganhos na semana',
        value: 560322.02,
        isCurrency: true,
        color: 'default',
    },
};

export const Primary: Story = {
    args: {
        description: 'ganhos na semana',
        value: 560322.02,
        isCurrency: false,
        color: 'primary',
    },
};

export const PrimaryCurrency: Story = {
    args: {
        description: 'ganhos na semana',
        value: 560322.02,
        isCurrency: true,
        color: 'primary',
    },
};

