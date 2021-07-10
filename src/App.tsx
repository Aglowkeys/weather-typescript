import { useSelector } from 'react-redux';
import City from './components/City';
import Header from './components/Header';
import { RootState } from './redux/store';

const App = () => {
	const { error } = useSelector((state: RootState) => state);
	return (
		<div className='App'>
			<Header />
			{!error && <City />}
		</div>
	);
};

export default App;
