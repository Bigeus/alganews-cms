import type { Meta, StoryObj } from '@storybook/react';
import FieldDescriptor, { FieldDescriptorProps } from '../Components/Typography/FieldDescriptor';

const meta = {
    title: 'Typography/FieldDescriptor',
    component: FieldDescriptor,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<FieldDescriptorProps>;

export const Default: Story = {
    args: {
        head: 'data de aniversário',
        children: '26 de Dezembro de 1997(22 anos)',
    },
};