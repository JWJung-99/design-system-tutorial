export interface ITabButtonProps {
	children: string;
	isSelected: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TabButton = ({ children, isSelected, onClick }: ITabButtonProps) => {
	const buttonStyle = isSelected
		? 'bg-white text-primaryDark rounded-sm'
		: 'text-base700';
	return (
		<button
			className={`w-[12rem] py-xs text-titleBase ${buttonStyle} `}
			onClick={onClick}
		>
			<span>{children}</span>
		</button>
	);
};

export default TabButton;
