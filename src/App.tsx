import { useSelector } from 'react-redux';
import City from './components/City';
import Header from './components/Header';
import { RootState } from './redux/store';

const App = () => {
	const { error, city } = useSelector((state: RootState) => state);
	return (
		<div className='App'>
			<Header />
			{!error && city.name && <City />}
			<div className='icon-github'>
				<a
					href='https://github.com/Aglowkeys/weather-typescript'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Visitar repositorio en Github'
				>
					<i className='fab fa-github'></i>
				</a>
			</div>
		</div>
	);
};

export default App;
