export interface IErrorMessageProps {
	children: string;
}

const ErrorMessage = ({ children }: IErrorMessageProps) => {
	return <p className="text-alert text-bodyXsmall">{children}</p>;
};

export default ErrorMessage;
