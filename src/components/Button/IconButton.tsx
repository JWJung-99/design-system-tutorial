export interface IIconButtonProps {
	iconPath: string;
	alt: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ iconPath, alt, onClick }: IIconButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="w-[2.4rem] h-[2.4rem] flex justify-center items-center ml-auto"
		>
			<img src={iconPath} alt={alt} className="w-[1.6rem] h-[1.6rem]" />
		</button>
	);
};

export default IconButton;
