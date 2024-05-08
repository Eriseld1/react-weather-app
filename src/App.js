import React from "react";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<h1>Weather App</h1>
			<footer>
				This project was coded by{" "}
				<a
					href="https://github.com/Eriseld1"
					target="_blank"
					rel="noopener noreferrer"
				>
					Eriselda Portillo
				</a>{" "}
				and is{" "}
				<a
					href="https://github.com/Eriseld1/react-weather-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					open-sourced on GitHub
				</a>{" "}
				and{" "}
				<a
					href="https://suspicious-beaver-111c4d.netlify.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					hosted on Netlify
				</a>
			</footer>
		</div>
	);
}
