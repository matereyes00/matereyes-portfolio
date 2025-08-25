import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import About from "./Pages/AboutPage";
import Stack from "./Features/Stack/Stack";
import Projects from "./Pages/ProjectsPage";
import MiniProjects from "./Pages/MiniProjectsPage";
import SteakDashboard from "./Features/Projects/MiniProjects/SteakTimer/SteakTimerProject";
import ReactPractice from "./Features/Projects/MiniProjects/AlgorithmVisualizer";
import Home from "./Pages/HomePage";
import "./App.css";
import Maze from "./Features/Projects/MiniProjects/Maze";
import ToggleDarkMode from "./Features/Projects/MiniProjects/ToggleDarkMode";
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
