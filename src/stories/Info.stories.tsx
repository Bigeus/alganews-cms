import type { Meta, StoryObj } from '@storybook/react';
import Info, { InfoProps } from '../Components/Info/Info';

const meta = {
    title: 'Example/Info',
    component: Info,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<InfoProps>;

export const Default: Story = {
    args: {
        title: 'Post não encontrado',
        desciption: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.',
    }
}