import type { Meta, StoryObj } from '@storybook/react';
import ErrorDisplay, { ErrorDisplayProps } from '../Components/ErrorDisplay/ErrorDisplay';

const meta = {
    title: 'Example/ErrorDisplay',
    component: ErrorDisplay,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ErrorDisplayProps>;

export const Default: Story = {
    args: {
        title: 'Erro ao renderizar componente',
        message: 'Erro desconhecido',
        small: true,
    }
}

export const BigIcon: Story = {
    args: {
        title: 'Erro ao renderizar componente *',
        message: 'Erro desconhecido',
        small: false,
    }
}