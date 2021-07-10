export const SEARCH_CITY = 'SEARCH_CITY';

export interface IState {
	name: string;
	country: string;
	min: string;
	max: string;
	weather: string;
}

export interface IAction {
	type: typeof SEARCH_CITY;
	payload: IState;
}
