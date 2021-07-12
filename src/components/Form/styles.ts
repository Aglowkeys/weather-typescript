import styled from 'styled-components';

export const StyledForm = styled.form`
	position: relative;
	width: 100%;
	max-width: 500px;
	color: white;

	&.loading {
		input {
			opacity: 0.5;
		}
	}

	&::after {
		content: '\f002';
		position: absolute;
		top: 50%;
		left: 1.25em;
		transform: translateY(-50%);
		font-family: 'Font Awesome 5 Pro';
		font-weight: 400;
		font-size: 1em;
		color: var(--primary);
	}

	input,
	button {
		font-family: inherit;
	}

	label {
		display: block;
		width: 0;
		height: 0;
		opacity: 0;
		position: absolute;
		left: -1vw;
	}

	input {
		padding: 1em 1.25em 1em 4em;
		color: inherit;
		width: 100%;
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
