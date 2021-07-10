export const SEARCH_CITY = 'SEARCH_CITY';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export interface ICity {
	name: string;
	country: string;
	min: string;
	max: string;
	weather: string;
}

export interface IActionSearch {
	type: typeof SEARCH_CITY;
	payload: ICity;
}

export interface IActionLoading {
	type: typeof LOADING;
	payload?: ICity;
}

export interface IActionError {
	type: typeof ERROR;
	payload?: ICity;
}

export interface IState {
	loading: boolean;
	error: boolean;
	city: ICity;
}

export type ActionType = IActionSearch | IActionLoading | IActionError;
