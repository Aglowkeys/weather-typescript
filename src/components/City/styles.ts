import styled from 'styled-components';
import { fadein } from '../../utils/animations';

export const StyledCity = styled.section`
	background: red;

	&.fadein {
		animation: ${fadein} 1s forwards;
	}
`;
