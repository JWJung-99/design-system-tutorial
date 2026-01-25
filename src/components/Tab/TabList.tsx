import { useState } from 'react';
import TabButton from './TabButton';

export interface ITabListProps<T> {
	tabList: T[];
	onTabClick: (tab: T) => void;
}

const TabList = <T extends string>({
	tabList,
	onTabClick,
}: ITabListProps<T>) => {
	const [selectedTab, setSelectedTab] = useState<T>(tabList[0]);
	return (
		<ul
			className="p-xs rounded-sm bg-base100 inline-flex items-center"
			onClick={(event) => {
				const target = event.target as HTMLElement;
				const tab = target.textContent as T;
				onTabClick(tab);
			}}
		>
			{tabList.map((tab) => (
				<li key={tab}>
					<TabButton
						isSelected={tab === selectedTab}
						onClick={() => setSelectedTab(tab)}
					>
						{tab}
					</TabButton>
				</li>
			))}
		</ul>
	);
};

export default TabList;
