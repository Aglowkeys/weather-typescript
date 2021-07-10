import Form from './components/Form';

const App = () => {
	return (
		<div className='App'>
			<h1>Weather App</h1>
			<Form />
			<div className='city-info-container'></div>
		</div>
	);
};

export default App;
