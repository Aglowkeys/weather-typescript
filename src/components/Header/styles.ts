import styled from 'styled-components';
import { fadein } from '../../utils/animations';

export const StyledHeader = styled.header`
	position: absolute;
	left: 3em;
	right: 3em;
	top: 50%;
	transform: translateY(-50%);
	transition: 1s ease;

	&.top {
		top: 3em;
		transform: none;
	}

	h1 {
		font-size: 4em;
		text-transform: uppercase;
		font-weight: 900;
		margin-bottom: 0.2em;
		width: fit-content;
		color: transparent;
		background: linear-gradient(160deg, var(--primary), var(--secondary));
		background-clip: text;
		-webkit-background-clip: text;
		line-height: 1;

		@media (max-width: 450px) {
			font-size: 3em;
		}
	}

	.error-message {
		width: fit-content;
		display: flex;
		align-items: center;
		margin-top: 1.5em;
		color: #fce5ec;
		font-size: 0.85em;
		font-weight: bold;
		border-radius: 0.4em;
		animation: ${fadein} 1s forwards;

		svg {
			width: 2em;
			height: 2em;
			margin-right: 1em;
		}
	}
`;
