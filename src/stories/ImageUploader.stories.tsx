import type { Meta, StoryObj } from '@storybook/react';
import ImageUploader, { ImageUploaderProps } from '../Components/ImageUploader/ImageUploader';

const meta = {
    title: 'Example/ImageUploader',
    component: ImageUploader,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ImageUploaderProps>;

export const Default: Story = {
    args: {
        label: 'Thumbnail do post',
    }
}