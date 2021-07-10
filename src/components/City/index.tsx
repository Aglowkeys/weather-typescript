import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { StyledCity } from './styles';

const City = () => {
	const { city, loading } = useSelector((state: RootState) => state);

	return <StyledCity className={city.name && !loading ? 'fadein' : ''}>{city.name}</StyledCity>;
};

export default City;
