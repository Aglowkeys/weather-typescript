import { IState, IAction, SEARCH_CITY, LOADING } from '../types';

const initialState: IState = {
	loading: false,
	city: {
		name: '',
		country: '',
		min: '',
		max: '',
		weather: '',
	},
};

const reducer = (state: IState = initialState, action: IAction) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};

		case SEARCH_CITY:
			return {
				...state,
				loading: false,
				city: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
