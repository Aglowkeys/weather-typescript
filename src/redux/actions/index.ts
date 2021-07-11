import { Dispatch } from 'redux';
import {
	SEARCH_CITY,
	IActionError,
	IActionLoading,
	LOADING,
	ERROR,
	ActionType,
	ICity,
} from '../types';

export const setLoading = () => {
	return (dispatch: Dispatch<IActionLoading>) => {
		dispatch({
			type: LOADING,
		});
	};
};

export const setError = () => {
	return (dispatch: Dispatch<IActionError>) => {
		dispatch({
			type: ERROR,
		});
	};
};

export const searchCity = (city: string) => {
	let foundCity: ICity = {
		name: '',
		country: '',
		flag: '',
		max: 0,
		min: 0,
		weather: '',
	};

	return (dispatch: Dispatch<ActionType>) => {
		dispatch({ type: LOADING });

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=es`
		)
			.then((res) => res.json())
			.then((data) => {
				let isoName = data.sys.country;
				foundCity = {
					name: data.name,
					country: data.sys.country,
					flag: '',
					min: Math.round(data.main.temp_min),
					max: Math.round(data.main.temp_max),
					weather: data.weather[0].description,
				};

				let headers = new Headers();
				headers.append('X-CSCAPI-KEY', `${process.env.REACT_APP_COUNTRY_KEY}`);

				let requestOptions = {
					method: 'GET',
					headers: headers,
				};

				return fetch(
					`https://api.countrystatecity.in/v1/countries/${isoName}`,
					requestOptions
				);
			})
			.then((res) => res.json())
			.then((data) => {
				let translations = JSON.parse(data.translations);
				foundCity.country = translations.es || data.name;
				foundCity.flag = data.emoji;

				dispatch({
					type: SEARCH_CITY,
					payload: foundCity,
				});
			})
			.catch(() => {
				dispatch({ type: ERROR });
			});
	};
};
