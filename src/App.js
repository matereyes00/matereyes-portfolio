import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About_/About";
import Stack from "./Stack_/Stack";
import Projects from "./Projects_/Projects";
import MiniProjects from "./Projects_/MiniProjects/MiniProjects";
import SteakDashboard from "./Projects_/MiniProjects/SteakTimerProject";
import ReactPractice from "./Projects_/MiniProjects/AlgorithmVisualizer";
import Home from "./Home_/Home";
import "./App.css";
import Maze from "./Projects_/MiniProjects/Maze";
import ToggleDarkMode from "./Projects_/MiniProjects/ToggleDarkMode";
function App() {
	return (
		<Router basename="/matereyes-portfolio">
			<div className="App">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/stack" element={<Stack />} />
						{/* Catch-all route: Redirect unknown routes to Home */}
						<Route path="/projects" element={<Projects />} />
						<Route path="/mini-projects" element={<MiniProjects />} />
						<Route
							path="/mini-projects/steak-dashboard"
							element={<SteakDashboard />}
						/>
						<Route path="/mini-projects/maze" element={<Maze />} />
						<Route
							path="/mini-projects/toggle-dark-mode"
							element={<ToggleDarkMode />}
						/>
						<Route
							path="/mini-projects/react-practice"
							element={<ReactPractice />}
						/>
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
