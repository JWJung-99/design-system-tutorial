export interface IImageButtonProps {
	iconPath: string;
	iconAlt: string;
	text: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ImageButton = ({
	iconPath,
	iconAlt,
	text,
	onClick,
}: IImageButtonProps) => {
	return (
		<button
			className="w-[4.8rem] h-[4.8rem] py-[2px] box-border flex flex-col gap-sm justify-center"
			onClick={onClick}
		>
			<img className="w-[2rem] h-[2rem] m-auto" src={iconPath} alt={iconAlt} />
			<span className="text-bodyCaption text-white">{text}</span>
		</button>
	);
};

export default ImageButton;
