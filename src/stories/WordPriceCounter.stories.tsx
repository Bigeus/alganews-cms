import type { Meta, StoryObj } from '@storybook/react';
import WordPriceCounter, { WordPriceCounterProps } from '../Components/WordPriceCounter/WordPriceCounter';

const meta = {
    title: 'Example/WordPriceCounter',
    component: WordPriceCounter,
    tags: ['autodocs'],
} as Meta

export default meta;

type Story = StoryObj<WordPriceCounterProps>;

export const Default: Story = {
    args: {
        wordCount: 0,
        pricePerWord: 200.00
    }
}