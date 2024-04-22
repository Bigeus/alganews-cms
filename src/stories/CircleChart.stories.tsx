import type { Meta, StoryObj } from '@storybook/react';
import CircleChart, { CircleChartProps } from '../Components/CircleChart/CircleChart';

const meta = {
    title: 'Example/CircleChart',
    component: CircleChart,
    tags: ['autodocs'],
    argTypes: {
        progress: {
            control: {
                type: 'range',
                min: 0,
                max: 100,
            }
        }
    }
} as Meta

export default meta;

type Story = StoryObj<CircleChartProps>;

export const Default: Story = {
    args: {
        size: 150,
    }
}
