import { useSelector } from 'react-redux';
import Form from '../Form';
import { StyledHeader } from './styles';
import { RootState } from '../../redux/store';
import Exclamation from '../Exclamation';

const Header = () => {
	const { error, city } = useSelector((state: RootState) => state);

	return (
		<StyledHeader className={city.name ? 'top' : ''}>
			<h1>Weather App</h1>
			<Form />
			{error && (
				<div className='error-message'>
					<Exclamation />
					La ciudad buscada no existe.
				</div>
			)}
		</StyledHeader>
	);
};

export default Header;
