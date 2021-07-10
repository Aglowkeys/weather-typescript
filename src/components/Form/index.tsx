import { StyledForm } from './styles';

const Form = () => {
	return (
		<StyledForm>
			<label htmlFor='search-input'>Buscar una ciudad</label>
			<input type='text' id='search-input' placeholder='Busca una ciudad' />
		</StyledForm>
	);
};

export default Form;
