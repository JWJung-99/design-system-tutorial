import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import TabButton from '../components/Tab/TabButton';

const meta = {
	title: 'Tab/TabButton', // 경로
	component: TabButton, // 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

	// TabButtonProps 내용
	argTypes: {
		children: { control: 'text', description: '버튼의 텍스트 내용' },
		isSelected: { control: 'boolean', description: '버튼이 선택되었는지 여부' },
		onClick: { action: 'clicked', description: '버튼 클릭 이벤트 핸들러' },
	},
	args: { onClick: fn() }, // 이벤트 핸들러가 필요하다면 다음과 같이 마킹
} satisfies Meta<typeof TabButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Tab',
		isSelected: false,
	},
};
