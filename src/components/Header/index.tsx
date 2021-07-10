import { useSelector } from 'react-redux';
import Form from '../Form';
import { StyledHeader } from './styles';
import { RootState } from '../../redux/store';

const Header = () => {
	const { error } = useSelector((state: RootState) => state);

	return (
		<StyledHeader>
			<h1>Weather App</h1>
			<Form />
			{error && <div className='error-message'>La ciudad buscada no existe.</div>}
		</StyledHeader>
	);
};

export default Header;
