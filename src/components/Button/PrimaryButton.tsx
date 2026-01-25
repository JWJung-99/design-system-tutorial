type PrimaryButtonTheme = 'dark' | 'light' | 'outlined' | 'text';

export interface IPrimaryButtonProps {
	theme: PrimaryButtonTheme;
	children: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	isDisabled: boolean;
}

const dark = 'bg-primaryDark text-white';
const light = 'bg-base100 text-primaryDark';
const outlined =
	'bg-transparent text-primaryDark shadow-[inset_0_0_0_1px_var(--color-primary-dark)]';
const text = 'bg-transparent text-primaryDark';
const disabled =
	'disabled:bg-base300 disabled:text-white disabled:cursor-not-allowed';

// Record 타입을 사용하여 theme에 따른 클래스를 매핑
const color: Record<PrimaryButtonTheme, string> = {
	dark,
	light,
	outlined,
	text,
};

const PrimaryButton = ({
	theme,
	children,
	onClick,
	isDisabled,
}: IPrimaryButtonProps) => {
	return (
		<button
			className={`w-full px-md py-sm rounded-sm ${color[theme]} ${disabled} ${theme === 'text' && 'group'}`}
			onClick={onClick}
			disabled={isDisabled}
		>
			<span
				className={`text-titleBase ${theme === 'text' && 'group-hover:underline'}`}
			>
				{children}
			</span>
		</button>
	);
};

export default PrimaryButton;
