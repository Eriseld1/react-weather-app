import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App ">
			<div className="container">
				<Weather defaultCity="New York" />
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
						href="https://moonlit-gaufre-6c35d6.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						hosted on Netlify
					</a>
				</footer>
			</div>
		</div>
	);
}
