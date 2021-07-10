import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const City = () => {
	const { city } = useSelector((state: RootState) => state);
	return <div style={{ outline: '2px solid red' }}>Info ciudad</div>;
};

export default City;
