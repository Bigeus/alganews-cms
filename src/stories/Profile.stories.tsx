import type { Meta, StoryObj } from '@storybook/react';
import Profile, { ProfileProps } from '../Components/Profile/Profile';

const meta = {
    title: 'Example/Profile',
    component: Profile,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<ProfileProps>;

export const Default: Story = {
    args: {
        name: 'Felipe Hash',
        description: 'criador de conteúdo há 3 anos',
    }
}