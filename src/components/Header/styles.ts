import styled from 'styled-components';

export const StyledHeader = styled.header`
	position: absolute;
	left: 3em;
	right: 3em;
	top: 50%;
	transform: translateY(-50%);

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
`;
