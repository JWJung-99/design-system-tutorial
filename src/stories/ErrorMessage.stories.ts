import type { Meta, StoryObj } from '@storybook/react-vite';

import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const meta = {
	title: 'Text/ErrorMessage', // 경로
	component: ErrorMessage, // 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// LabelProps의 내용
	argTypes: {
		children: { control: 'text', description: 'error message의 내용' },
	},
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Password does not meet the requirements.',
	},
};
