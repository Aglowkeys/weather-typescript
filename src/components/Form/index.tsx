import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCity } from '../../redux/actions';
import { StyledForm } from './styles';

const Form = () => {
	const [cityName, setCityName] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		dispatch(searchCity(cityName));
	};

	return (
		<StyledForm onSubmit={(ev) => handleSubmit(ev)}>
			<label htmlFor='search-input'>Buscar una ciudad</label>
			<input
				autoComplete='off'
				type='text'
				id='search-input'
				placeholder='Busca una ciudad'
				value={cityName}
				onChange={(ev) => setCityName(ev.target.value)}
			/>
		</StyledForm>
	);
};

export default Form;
