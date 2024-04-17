import type { Meta, StoryObj } from '@storybook/react';
import NoData, { NoDataProps } from '../Components/NoData/NoData';

const meta = {
    title: 'Example/NoData',
    component: NoData,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<NoDataProps>;

export const Default: Story = {
    args: {}
}

export const FixedHeight: Story = {
    args: {
        height: 240,
    }
}