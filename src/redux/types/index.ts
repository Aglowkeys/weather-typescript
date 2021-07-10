export const SEARCH_CITY = 'SEARCH_CITY';
export const LOADING = 'LOADING';

export interface ICity {
	name: string;
	country: string;
	min: string;
	max: string;
	weather: string;
}

export interface IAction {
	type: string;
	payload: ICity;
}

export interface IState {
	loading: boolean;
	city: ICity;
}
