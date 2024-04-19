import type { Meta, StoryObj } from '@storybook/react';
import Chart, { ChartProps } from '../Components/Chart/Chart';

const meta = {
    title: 'Example/Chart',
    component: Chart,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ChartProps>;

export const Default: Story = {
    args: {

    },
};