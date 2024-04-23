import type { Meta, StoryObj } from '@storybook/react';
import TagInput, { TagInputProps } from '../Components/TagInput/TagInput';

const meta = {
    title: 'Example/TagInput',
    component: TagInput,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<TagInputProps>;

export const Default: Story = {
    args: {
        
    }
}