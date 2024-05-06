import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from '../Components/ProgressBar/ProgressBar';

const meta = {
    title: 'Example/ProgressBar',
    component: ProgressBar,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ProgressBarProps>;

export const Default: Story = {
    args: {
        progress: 50,
        theme: 'primary',
        title: 'Título Teste Teste Teste Teste',
    }
}
