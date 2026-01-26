// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react-vite';

import { expect } from 'storybook/test';
import LoginForm from '../components/Form/LoginForm';

const meta = {
	title: 'Forms/LoginForm',
	component: LoginForm,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {
	play: async ({ canvas }) => {
		// 👇 Simulate interactions with the component
		const emailInput = canvas.getByTestId('email');
		await expect(emailInput).toBeInTheDocument();
		const passwordInput = canvas.getByTestId('password');
		await expect(passwordInput).toBeInTheDocument();
		const loginButton = canvas.getByRole('button', { name: 'Login' });
		// 👇 Assert DOM structure
		await expect(loginButton).toBeDisabled();
	},
};

export const FilledForm: Story = {
	play: async ({ canvas, userEvent }) => {
		// 👇 Simulate interactions with the component
		const emailInput = canvas.getByTestId('email');
		await userEvent.type(emailInput, 'test@email.com');

		const passwordInput = canvas.getByTestId('password');
		await userEvent.type(passwordInput, 'a-random-password');

		const loginButton = canvas.getByRole('button', { name: 'Login' });
		// 👇 Assert DOM structure
		await expect(loginButton).toBeEnabled();
	},
};
