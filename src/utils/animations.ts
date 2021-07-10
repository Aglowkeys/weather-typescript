import { keyframes } from 'styled-components';

export const fadein = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-10px)
	}

	100% {
		opacity: 1;
		transform: translateY(0)
	}
`;

export const spin = keyframes`
	100% {
		transform: rotate(1turn);
	}
`;
