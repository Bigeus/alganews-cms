import type { Meta, StoryObj } from '@storybook/react';
import Confirm, { ConfirmProps } from '../Components/Confirm/Confirm';

const meta = {
    title: 'Example/Confirm',
    component: Confirm,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ConfirmProps>;

export const Default: Story = {
    args: {
        title: 'Deseja realmente sair?'
    },
};