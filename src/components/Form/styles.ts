import styled from 'styled-components';

export const StyledForm = styled.form`
	input,
	button {
		font-family: inherit;
	}

	label {
		display: block;
		width: 0;
		height: 0;
		opacity: 0;
		visibility: hidden;
		position: absolute;
		left: -1vw;
	}

	input {
		padding: 1em 1.25em;
		color: white;
		width: 100%;
		max-width: 500px;
		border-radius: 3em;
		border: 2px solid var(--primary);
		background-color: rgba(255, 255, 255, 0.1);
		transition: 200ms ease;
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 1px;
	}

	input:focus {
		background-color: rgba(140, 243, 209, 0.3);
		box-shadow: -10px -10px 25px rgba(63, 133, 213, 0.3), -10px 10px 30px rgba(151, 0, 255, 0.2),
			15px -5px 30px rgba(63, 213, 171, 0.4);
		outline: none;
		border-color: var(--secondary);
	}
`;
