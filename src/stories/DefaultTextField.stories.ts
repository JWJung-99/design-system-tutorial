import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import DefaultTextField from '../components/TextField/DefaultTextField';

const meta = {
	title: 'TextFields/DefaultTextField', // 경로
	component: DefaultTextField, // 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// DefaultTextFieldProps의 내용
	argTypes: {
		type: {
			control: 'select',
			options: ['text', 'email', 'password', 'number'],
			description: '입력 필드의 타입',
		},
		id: { control: 'text', description: '입력 필드의 고유 ID' },
		placeholder: { control: 'text', description: '입력 필드의 placeholder' },
		onChange: {
			action: 'changed',
			description: '입력 필드의 값 변경 이벤트 핸들러',
		},
		value: { control: 'text', description: '입력 필드의 현재 값' },
		iconPath: { control: 'text', description: '아이콘 이미지 경로' },
		iconAlt: { control: 'text', description: '아이콘의 대체 텍스트' },
		onIconClick: {
			action: 'clicked',
			description: '아이콘 클릭 이벤트 핸들러',
		},
		errorMessage: { control: 'text', description: '에러 메시지' },
		isError: { control: 'boolean', description: '에러 상태 여부' },
	},
	args: { onChange: fn(), onIconClick: fn() }, // 이벤트 핸들러가 필요하다면 다음과 같이 마킹
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		type: 'text',
		id: 'name',
		placeholder: 'Enter Name',
		value: '',
		iconPath: '/icons/icon-x-circle.svg',
		iconAlt: 'clear',
		errorMessage: 'This is an error message.',
		isError: false,
	},
};
