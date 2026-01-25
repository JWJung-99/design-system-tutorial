import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import NavigationBar from '../components/Navigation/NavigationBar';

const meta = {
	title: 'Navigation/NavigationBar', // 경로
	component: NavigationBar, // 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// Storybook 내에서 스타일 확인을 위해 적용, ts -> tsx
	decorators: [
		(Story) => (
			<div style={{ width: '400px', boxShadow: '0 0 0 1px red' }}>
				{Story()}
			</div>
		),
	],
	// NavigationBarProps의 내용
	argTypes: {
		isDark: {
			control: 'boolean',
			description: '다크 모드 여부',
		},
		showBackButton: {
			control: 'boolean',
			description: '뒤로가기 버튼 표시 여부',
		},
		showCloseButton: { control: 'boolean', description: '닫기 버튼 표시 여부' },
		showPageTitle: { control: 'boolean', description: '페이지 제목 표시 여부' },
		pageTitle: { control: 'text', description: '페이지 제목' },
		onBackButtonClick: {
			action: 'backButtonClicked',
			description: '뒤로가기 버튼 클릭 시 호출되는 함수',
		},
		onCloseButtonClick: {
			action: 'closeButtonClicked',
			description: '닫기 버튼 클릭 시 호출되는 함수',
		},
	},
	args: { onBackButtonClick: fn(), onCloseButtonClick: fn() },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		isDark: false,
		showBackButton: true,
		showCloseButton: true,
		showPageTitle: true,
		pageTitle: 'Title',
	},
};
