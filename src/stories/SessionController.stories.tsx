import type { Meta, StoryObj } from '@storybook/react';
import SessionController, { SessionControllerProps } from '../Components/SessionController/SessionController';

const meta = {
    title: 'Example/SessionController',
    component: SessionController,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<SessionControllerProps>;

export const Default: Story = {
    args: {
        name: 'Daniel Bonifácio da Silva Junior Ave Cesar',
        description: 'editor há muito tempo',
    }
}