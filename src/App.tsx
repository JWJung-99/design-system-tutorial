import TabList from './components/Tab/TabList';

function App() {
	return (
		<>
			<TabList tabList={['Tab 1', 'Tab 2', 'Tab 3']} onTabClick={console.log} />
		</>
	);
}

export default App;
