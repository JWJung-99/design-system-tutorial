import IconButton from '../Button/IconButton';

interface INavigationBarProps {
	isDark: boolean;
	showBackButton: boolean;
	showCloseButton: boolean;
	showPageTitle: boolean;
	pageTitle?: string;
	onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
	onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavigationBar = ({
	isDark,
	showBackButton,
	showCloseButton,
	showPageTitle,
	pageTitle = '',
	onBackButtonClick = () => {},
	onCloseButtonClick = () => {},
}: INavigationBarProps) => {
	return (
		<nav className="w-full flex items-center gap-sm">
			{/* 뒤로가기 버튼 */}
			<div className="mr-auto">
				{showBackButton && (
					<div className="w-[3.2rem] h-[3.2rem]">
						<IconButton
							iconPath={`/icons/icon-chevron-left${isDark ? '-white' : ''}.svg`}
							alt="back"
							onClick={onBackButtonClick}
						/>
					</div>
				)}
			</div>
			{/* 페이지 이름 */}
			{showPageTitle && (
				<h1
					className={`w-full text-titleMedium ${isDark ? 'text-white' : 'text-black'}`}
				>
					{pageTitle}
				</h1>
			)}
			{/* 닫기 버튼 */}
			<div className="ml-auto">
				{showCloseButton && (
					<div className="w-[3.2rem] h-[3.2rem]">
						<IconButton
							iconPath={`/icons/icon-x${isDark ? '-white' : ''}.svg`}
							alt="close"
							onClick={onCloseButtonClick}
						/>
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavigationBar;
