import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import IconButton from '../components/Button/IconButton';

const meta = {
	title: 'Buttons/IconButton', // 경로
	component: IconButton, // 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// IconButtonProps의 내용
	argTypes: {
		alt: { control: 'text', description: '아이콘의 대체 텍스트' },
		iconPath: { control: 'text', description: '아이콘의 경로' },
		onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
	},
	args: { onClick: fn() }, // 이벤트 핸들러가 필요하다면 다음과 같이 마킹
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		alt: 'icon',
		iconPath: '/icons/icon-x-circle.svg',
	},
};
