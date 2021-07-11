import { IState, ActionType, SEARCH_CITY, LOADING, ERROR } from '../types';

const initialState: IState = {
	loading: false,
	error: false,
	city: {
		name: '',
		country: '',
		flag: '',
		min: 0,
		max: 0,
		weather: '',
	},
};

const reducer = (state: IState = initialState, action: ActionType) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};

		case SEARCH_CITY:
			return {
				...state,
				error: false,
				loading: false,
				city: action.payload,
			};

		case ERROR:
			return {
				...state,
				error: true,
				loading: false,
			};

		default:
			return state;
	}
};

export default reducer;
