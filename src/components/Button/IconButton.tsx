export interface IIconButtonProps {
	iconPath: string;
	alt: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ iconPath, alt, onClick }: IIconButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="w-full h-full aspect-square flex justify-center items-center px-xs py-sm box-border"
		>
			<img src={iconPath} alt={alt} />
		</button>
	);
};

export default IconButton;
