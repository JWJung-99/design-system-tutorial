import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import PrimaryButton from '../components/Button/PrimaryButton';

const meta = {
	title: 'Buttons/PrimaryButton', // 경로
	component: PrimaryButton, // 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '300px' }}>
				<Story />
			</div>
		),
	],
	// ButtonProps의 내용
	argTypes: {
		type: {
			control: 'select',
			options: ['button', 'submit'],
			description: '버튼의 타입 설정',
		},
		theme: {
			control: {
				type: 'select',
				options: ['dark', 'light', 'outlined', 'text'],
			},
			description: '버튼의 테마 설정',
		},
		children: { control: 'text', description: '버튼의 텍스트 내용' },
		onClick: { action: 'clicked', description: '버튼 클릭 이벤트 핸들러' },
		isDisabled: { control: 'boolean', description: '버튼 비활성화 여부' },
	},
	args: { onClick: fn() }, // 이벤트 핸들러가 필요하다면 다음과 같이 마킹
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
	args: {
		type: 'button',
		theme: 'dark',
		children: 'Button',
		isDisabled: false,
	},
};

export const Light: Story = {
	args: {
		type: 'button',
		theme: 'light',
		children: 'Button',
		isDisabled: false,
	},
};

export const Outlined: Story = {
	args: {
		type: 'button',
		theme: 'outlined',
		children: 'Button',
		isDisabled: false,
	},
};

export const Text: Story = {
	args: {
		type: 'button',
		theme: 'text',
		children: 'Button',
		isDisabled: false,
	},
};

export const Disabled: Story = {
	args: {
		type: 'button',
		theme: 'dark',
		children: 'Button',
		isDisabled: true,
	},
};
