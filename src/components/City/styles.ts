import styled from 'styled-components';
import { fadein } from '../../utils/animations';

export const StyledCity = styled.section`
	display: flex;
	position: absolute;
	top: 40%;
	/* transform: translateY(-100%); */
	text-shadow: 0 0 30px rgba(0, 0, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.3);

	@media (max-width: 600px) {
		flex-direction: column;

		.card__weather-info {
			border-top: 4px solid var(--primary);
			border-left: 0 !important;
		}
	}

	&.fadein {
		animation: ${fadein} 1.5s forwards;
	}

	.card__header {
		padding: 2em;

		.city {
			font-size: 3em;
			line-height: 1;
			color: var(--primary);
		}

		.country {
			margin-top: 1em;
			text-transform: uppercase;
			font-weight: 700;
			color: var(--secondary);
			letter-spacing: 1px;
		}
	}

	.card__weather-info {
		padding: 0.5em 2em 2em;
	}

	.card__weather-info {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		border-left: 4px solid var(--primary);

		.inner-container {
			min-width: 9em;
			margin-top: 1.5em;
		}

		p {
			font-size: 2.5em;
			font-weight: 600;
			text-transform: capitalize;
			color: var(--primary);
		}

		span {
			display: block;
			width: max-content;
			font-size: 0.75rem;
			text-transform: uppercase;
			font-weight: 800;
			color: var(--secondary);
		}
	}
`;
