import { useState } from 'react';
import IconButton from '../Button/IconButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export interface IDefaultTextFieldProps {
	type: 'text' | 'email' | 'password' | 'number';
	id: string;
	placeholder: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	value: string;
	iconPath: string;
	iconAlt: string;
	onIconClick: React.MouseEventHandler<HTMLButtonElement>;
	errorMessage: string;
	isError: boolean;
}

const DefaultTextField = ({
	type,
	id,
	placeholder,
	onChange,
	value,
	iconPath,
	iconAlt,
	onIconClick,
	errorMessage,
	isError,
}: IDefaultTextFieldProps) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className="relative text-field mb-lg">
			<div
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				className={`
					w-full
					mb-xs
					px-md py-sm
					text-black
					border-base300 ${isFocused && 'border-primaryDark'} ${isError && 'border-alert'} border-2 box-border
					rounded-sm
					flex items-center gap-sm
				`}
			>
				<input
					data-testid={id}
					id={id}
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					className="outline-none text-bodyBase placeholder:text-base500"
				/>
				{!!value ? (
					<div className="w-[2.4rem] h-[2.4rem] flex justify-center items-center ml-auto">
						<IconButton
							iconPath={iconPath}
							alt={iconAlt}
							onClick={onIconClick}
						/>
					</div>
				) : (
					<div className="w-[2.4rem] h-[2.4rem] flex justify-center items-center ml-auto" />
				)}
			</div>
			{isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</div>
	);
};

export default DefaultTextField;
