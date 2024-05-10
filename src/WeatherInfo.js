import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1>{props.data.city}</h1>
			<ul>
				<li>
					<FormattedDate date={props.data.date} />
				</li>
				<li className="text-capitalize">{props.data.description}</li>
			</ul>
			<div className="row">
				<div className="col-6">
					<div className="float-left">
						<WeatherIcon code={props.data.icon} size={52} />
					</div>
					<div className="float-left">
						<span className="temperature">
							{Math.round(props.data.temperature)}
						</span>
					</div>
					<span className="unit">°C</span>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind} km/m</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
