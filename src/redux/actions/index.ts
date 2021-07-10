import { Dispatch } from 'redux';
import { SEARCH_CITY, IActionError, IActionLoading, LOADING, ERROR, ActionType } from '../types';

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

export const searchCity = (cityName: string) => {
	return (dispatch: Dispatch<ActionType>) => {
		dispatch({ type: LOADING });

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=es`
		)
			.then((res) => res.json())
			.then((data) => {
				const foundCity = {
					name: data.name,
					country: data.sys.country,
					min: data.main.temp_min,
					max: data.main.temp_max,
					weather: data.weather[0].description,
				};

				dispatch({
					type: SEARCH_CITY,
					payload: foundCity,
				});
			})
			.catch((err) => {
				dispatch({ type: ERROR });
			});
	};
};
