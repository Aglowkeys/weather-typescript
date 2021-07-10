import { Dispatch } from 'redux';
import { SEARCH_CITY, IAction } from '../types';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export const searchCity = (cityName: string) => {
	return (dispatch: Dispatch<IAction>) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`
		)
			.then((res) => res.json())
			.then((data) => {
				const foundCity = {
					name: data.name,
					country: data.sys.country,
					min: data.main.temp_min,
					max: data.main.temp_min,
					weather: data.weather[0].description,
				};

				console.log(`foundCity`, foundCity);
				dispatch({
					type: SEARCH_CITY,
					payload: foundCity,
				});
			});
	};
};
