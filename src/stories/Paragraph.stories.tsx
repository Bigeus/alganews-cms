import type { Meta, StoryObj } from '@storybook/react';
import Paragraph, { ParagraphProps } from '../Components/Typography/Paragraph';

const meta = {
    title: 'Typography/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ParagraphProps>;

export const Default: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem blanditiis, harum ipsum reiciendis voluptatem molestiae velit dolor, recusandae, autem illum explicabo? Dolorum, suscipit itaque.',
        size: 'default'
    },
};
export const Small: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem blanditiis, harum ipsum reiciendis voluptatem molestiae velit dolor, recusandae, autem illum explicabo? Dolorum, suscipit itaque.',
        size: 'small'
    },
};