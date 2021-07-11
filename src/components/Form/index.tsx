import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCity } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { StyledForm } from './styles';
import Spinner from '../Spinner';

const Form = () => {
	const [cityName, setCityName] = useState('');
	const dispatch = useDispatch();
	const { loading } = useSelector((state: RootState) => state);

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setCityName(ev.target.value);
	};

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		if (cityName) {
			ev.preventDefault();
			dispatch(searchCity(cityName));
			setCityName('');
		}
	};

	return (
		<StyledForm onSubmit={(ev) => handleSubmit(ev)} className={loading ? 'loading' : undefined}>
			<label htmlFor='search-input'>Buscar una ciudad</label>
			<input
				autoComplete='off'
				type='text'
				id='search-input'
				placeholder={loading ? 'Buscando...' : 'Busca una ciudad'}
				value={cityName}
				onChange={(ev) => handleChange(ev)}
				disabled={loading && true}
			/>
			{loading && <Spinner />}
		</StyledForm>
	);
};

export default Form;
