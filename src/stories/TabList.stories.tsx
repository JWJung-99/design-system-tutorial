import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import TabList from '../components/Tab/TabList';

const meta = {
	title: 'Tab/TabList', // 경로
	component: TabList, // 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{}}>
				<Story />
			</div>
		),
	],
	// TabListProps 내용
	argTypes: {
		tabList: {
			control: 'object',
			description: '탭 목록 배열',
		},
		onTabClick: {
			action: 'tab clicked',
			description: '탭 클릭 이벤트 핸들러',
		},
	},
	args: { onTabClick: fn() }, // 이벤트 핸들러가 필요하다면 다음과 같이 마킹
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tabList: ['Tab1', 'Tab2', 'Tab3'],
	},
};
