import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import ImageButton from '../components/Button/ImageButton';

const meta = {
	title: 'Buttons/ImageButton', // 경로
	component: ImageButton, // 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// ImageButtonProps의 내용
	argTypes: {
		iconAlt: { control: 'text', description: '아이콘의 대체 텍스트' },
		iconPath: { control: 'text', description: '아이콘의 경로' },
		text: { control: 'text', description: '버튼에 표시될 텍스트' },
		onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
	},
	args: { onClick: fn() }, // 이벤트 핸들러가 필요하다면 다음과 같이 마킹
} satisfies Meta<typeof ImageButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		iconAlt: 'account icon',
		iconPath: '/icons/icon-user-white.svg',
		text: 'Account',
	},
};
