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
		</div>
	);
};

export default App;
