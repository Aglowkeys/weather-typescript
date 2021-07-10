import { IState, IAction, SEARCH_CITY } from '../types';

const initialState: IState = {
	name: '',
	country: '',
	min: '',
	max: '',
	weather: '',
};

const reducer = (state: IState = initialState, action: IAction) => {
	switch (action.type) {
		case SEARCH_CITY:
			return action.payload;

		default:
			return state;
	}
};

export default reducer;
