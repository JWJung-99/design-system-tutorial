export interface ILabelProps {
	htmlFor: string;
	type: 'default' | 'required';
	children: string;
}

const Label = ({ htmlFor, type = 'default', children }: ILabelProps) => {
	return (
		<label
			htmlFor={htmlFor}
			className="text-primaryDark text-bodyCaption font-bold"
		>
			{children}
			{type === 'required' && <span className="text-alert">*</span>}
		</label>
	);
};

export default Label;
