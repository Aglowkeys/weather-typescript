import { useSelector } from 'react-redux';
import Form from '../Form';
import { StyledHeader } from './styles';
import { RootState } from '../../redux/store';

const Header = () => {
	const { loading } = useSelector((state: RootState) => state);
	return (
		<StyledHeader>
			<h1>Weather App</h1>
			<Form />
		</StyledHeader>
	);
};

export default Header;
