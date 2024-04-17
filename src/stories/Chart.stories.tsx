import type { Meta, StoryObj } from '@storybook/react';
import ChartC, { ChartProps } from '../Components/Chart/Chart';

const meta = {
    title: 'Example/ChartC',
    component: ChartC,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ChartProps>;

export const Default: Story = {
    args: {

    },
};