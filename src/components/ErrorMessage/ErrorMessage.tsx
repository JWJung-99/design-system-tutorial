export interface IErrorMessageProps {
	children: string;
}

const ErrorMessage = ({ children }: IErrorMessageProps) => {
	return <p className="text-alert text-bodyXsmall font-semibold">{children}</p>;
};

export default ErrorMessage;
