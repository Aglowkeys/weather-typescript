import { useState } from 'react';
import Header from './components/Header';

// const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
// https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric

const App = () => {
	const [isCityVisible] = useState(false);
	return (
		<div className='App'>
			<Header />
			{isCityVisible && <div className='city-info-container'></div>}
		</div>
	);
};

export default App;
