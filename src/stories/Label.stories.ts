import type { Meta, StoryObj } from '@storybook/react-vite';

import Label from '../components/Label/Label';

const meta = {
	title: 'Text/Label', // 경로
	component: Label, // 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// LabelProps의 내용
	argTypes: {
		htmlFor: { control: 'text', description: 'label의 for 속성' },
		children: { control: 'text', description: 'label의 내용' },
	},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		htmlFor: 'email',
		type: 'default',
		children: 'E-mail',
	},
};

export const Required: Story = {
	args: {
		htmlFor: 'password',
		type: 'required',
		children: 'Password',
	},
};
