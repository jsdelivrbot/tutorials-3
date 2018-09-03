import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map( weather => (weather.main.temp * 9/5) - 459.67);
		const pressure = cityData.list.map( weather => weather.main.pressure );
		const humidity = cityData.list.map( weather => weather.main.humidity );

		//const lon = cityData.city.coord.lon;
		//const lat = cityData.city.coord.lat;
		//condensed version:
		const {lon, lat} = cityData.city.coord;
		return (
			<tr key={name}>
				<td> <GoogleMap lon={lon} lat={lat}/> </td>
				<td> <Chart data={temps} color='orange' units='˚F'/> </td>
				<td> <Chart data={pressure} color='red' units='hPa'/> </td>
				<td> <Chart data={humidity} color='blue' units='%'/> </td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (˚F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	// {weather} in params is the same as:
	// const weather = state.weather;

	// using state.weather because we called the element weather in our weather reducer
	// return {weather: weather};
	// which can be shortened to:
	return {weather}; // {weather} === {weather: weather}
}

// Connects our WeatherList container to the redux state
export default connect(mapStateToProps)(WeatherList);
