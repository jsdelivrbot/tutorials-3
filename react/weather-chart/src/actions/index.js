import axios from 'axios';

const API_KEY = 'a1950e4d120d8eca154c99a6c52ab868';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	// Action creators must return an object with a type
	return {
		type: FETCH_WEATHER,
		// optional property containing data that describes the action
		payload: request
	};
}
