import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
			icon: response.data.weather[0].icon,
			wind: response.data.wind.speed,
			city: response.data.name,
		});
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city.."
								className="form-control"
								autoFocus="on"
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<h1>{weatherData.city}</h1>
				<ul>
					<li>Wednesday 07:00</li>
					<li className="text-capitalize">{weatherData.description}</li>
				</ul>
				<div className="row">
					<div className="col-6">
						<img src={weatherData.iconUrl} alt={weatherData.description}></img>
						<span className="temperature">
							{Math.round(weatherData.temperature)}
						</span>
						<span className="unit">°C</span>
					</div>
					<div className="col-6">
						<ul>
							<li>Precipitation: 15%</li>
							<li>Humidity: {weatherData.humidity}%</li>
							<li>Wind: {weatherData.wind} km/m</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "d5db2fac1e5b102d24dd3dd0c999858d";
		let city = "New York";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading...";
	}
}
