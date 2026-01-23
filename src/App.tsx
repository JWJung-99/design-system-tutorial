import { useState } from 'react';
import Label from './components/Label/Label';
import DefaultTextField from './components/TextField/DefaultTextField';
import { Button } from './components/Button/Button';

function App() {
	const [isError, setIsError] = useState(false);

	return (
		<>
			<Button label="Toggle Error" onClick={() => setIsError(!isError)} />
			<div>
				<Label htmlFor="first name" type="required">
					First Name
				</Label>
				<DefaultTextField
					id="name"
					placeholder="Enter your first name"
					onChange={() => {}}
					value=""
					iconPath="/icons/clear-icon.svg"
					iconAlt="clear"
					onIconClick={() => {}}
					errorMessage="Please check your first name."
					isError={isError}
				/>
			</div>
			<div>
				<Label htmlFor="name" type="required">
					Last Name
				</Label>
				<DefaultTextField
					id="name"
					placeholder="Enter your last name"
					onChange={() => {}}
					value=""
					iconPath="/icons/clear-icon.svg"
					iconAlt="clear"
					onIconClick={() => {}}
					errorMessage="Please check your last name."
					isError={isError}
				/>
			</div>
		</>
	);
}

export default App;
