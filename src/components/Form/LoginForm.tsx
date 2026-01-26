import { useState } from 'react';
import Label from '../Label/Label';
import DefaultTextField from '../TextField/DefaultTextField';
import PrimaryButton from '../Button/PrimaryButton';

const LoginForm = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div>
				<Label htmlFor="email" type="default">
					E-mail
				</Label>
				<DefaultTextField
					type="email"
					id="email"
					placeholder="Enter your email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					iconPath={'/icons/icon-x-circle.svg'}
					iconAlt={'delete icon'}
					onIconClick={() => setEmail('')}
					errorMessage={'Enter a valid email address.'}
					isError={false}
				/>
			</div>
			<div>
				<Label htmlFor="password" type="default">
					Password
				</Label>
				<DefaultTextField
					type="password"
					id="password"
					placeholder="Enter your password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					iconPath={'/icons/icon-x-circle.svg'}
					iconAlt={'delete icon'}
					onIconClick={() => setPassword('')}
					errorMessage={'Enter a valid password.'}
					isError={false}
				/>
			</div>
			<PrimaryButton
				type="submit"
				theme="dark"
				children="Login"
				onClick={() => {}}
				isDisabled={!email || !password}
			/>{' '}
		</form>
	);
};

export default LoginForm;
