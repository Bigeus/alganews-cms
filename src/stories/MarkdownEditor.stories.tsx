import type { Meta, StoryObj } from '@storybook/react';
import MarkdownEditor, { MarkdownEditorProps } from '../Components/MarkdownEditor/MarkdownEditor';

const meta = {
    title: 'Example/MarkdownEditor',
    component: MarkdownEditor,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<MarkdownEditorProps>;

export const Default: Story = {
    args: {
        
    }
}