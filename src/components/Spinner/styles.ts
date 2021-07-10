import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	100% {
		transform: translateY(-50%) rotate(1turn);
	}
`;

export const StyledSpinner = styled.div`
	position: absolute;
	right: 1.25em;
	top: 50%;
	transform: translateY(-50%);
	width: 20px;
	height: 20px;
	border: 5px solid var(--primary);
	border-right-color: transparent;
	border-radius: 50%;
	animation: ${spin} 500ms linear infinite;
`;
