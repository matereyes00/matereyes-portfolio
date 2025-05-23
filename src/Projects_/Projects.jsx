import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SqlIcon } from "@hugeicons/core-free-icons";

import {
	faCss3,
	faGitlab,
	faDocker,
	faBootstrap,
	faGit,
	faJs,
	faPython,
	faJava,
	faFigma,
	faReact,
	faHtml5,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
	const qgis_logo = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="30"
			height="30"
			viewBox="0 0 50 50"
		>
			<path d="M 25 3 C 12.317 3 2 12.645 2 24.5 C 1.898 39.711 18.563547 49.685094 32.935547 44.746094 C 33.645547 44.502094 33.860266 43.598219 33.322266 43.074219 L 26.351562 36.265625 C 26.149562 36.068625 25.872797 35.974234 25.591797 35.990234 C 19.332797 36.336234 13.979 31.07 14 24.5 C 14 18.159 18.935 13 25 13 C 31.29 12.954 36.325141 18.644844 35.994141 25.089844 C 35.979141 25.379844 36.083016 25.661281 36.291016 25.863281 L 44.390625 33.689453 C 44.886625 34.168453 45.697047 34.008672 45.998047 33.388672 C 52.862047 19.252672 41.365 2.792 25 3 z M 22 21 C 21.447 21 21 21.447 21 22 L 21 27.728516 C 21 27.997516 21.108781 28.255359 21.300781 28.443359 L 27 34.03125 L 27 27 L 34.654297 27 L 28.771484 21.283203 C 28.583484 21.102203 28.334219 21 28.074219 21 L 22 21 z M 37.220703 29.492188 L 29.5 29.5 L 29.5 36.482422 L 39.9375 46.714844 C 40.1255 46.898844 40.374719 47 40.636719 47 L 47 47 C 47.553 47 48 46.553 48 46 L 48 40.390625 C 48 40.119625 47.891266 39.860828 47.697266 39.673828 L 37.220703 29.492188 z"></path>
		</svg>
	);
	const jupyter_logo = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="25"
			height="25"
			viewBox="0 0 50 50"
		>
			<path d="M 37 0 C 34.794 0 33 1.794 33 4 C 33 6.206 34.794 8 37 8 C 39.206 8 41 6.206 41 4 C 41 1.794 39.206 0 37 0 z M 9.5 3 C 7.57 3 6 4.57 6 6.5 C 6 8.43 7.57 10 9.5 10 C 11.43 10 13 8.43 13 6.5 C 13 4.57 11.43 3 9.5 3 z M 25 6.953125 C 17.519 6.953125 10.713406 11.641141 8.0664062 18.619141 C 7.8974063 19.064141 8.0647969 19.566313 8.4667969 19.820312 C 8.8687969 20.074312 9.3936562 20.010016 9.7226562 19.666016 C 12.902656 16.340016 18.757 14.273438 25 14.273438 C 31.243 14.273438 37.097344 16.340016 40.277344 19.666016 C 40.472344 19.870016 40.734 19.974609 41 19.974609 C 41.185 19.974609 41.368203 19.923312 41.533203 19.820312 C 41.935203 19.566312 42.104547 19.064141 41.935547 18.619141 C 39.287547 11.641141 32.481 6.953125 25 6.953125 z M 9.1210938 29.986328 C 8.8984687 29.958828 8.6677969 30.005313 8.4667969 30.132812 C 8.0647969 30.386813 7.8964531 30.888984 8.0644531 31.333984 C 10.712453 38.311984 17.519 43 25 43 C 32.481 43 39.287594 38.311984 41.933594 31.333984 C 42.102594 30.888984 41.93325 30.386813 41.53125 30.132812 C 41.13025 29.878813 40.604391 29.941109 40.275391 30.287109 C 37.095391 33.613109 31.241047 35.679688 24.998047 35.679688 C 18.755047 35.679688 12.902656 33.613109 9.7226562 30.287109 C 9.5581562 30.114609 9.3437188 30.013828 9.1210938 29.986328 z M 11.5 41 C 9.019 41 7 43.018 7 45.5 C 7 47.982 9.019 50 11.5 50 C 13.981 50 16 47.981 16 45.5 C 16 43.019 13.981 41 11.5 41 z"></path>
		</svg>
	);
	const postman_logo = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="25"
			height="25"
			viewBox="0 0 64 64"
		>
			<path d="M 31.880859 3 C 27.661475 3.013642 23.379516 3.9528594 19.330078 5.9199219 C 12.416078 9.2789219 7.1204219 15.247719 4.6074219 22.511719 C -0.63657812 37.637719 7.3749531 54.149578 22.501953 59.392578 C 37.628953 64.635578 54.140766 56.624047 59.384766 41.498047 C 61.928766 34.228047 61.453453 26.240266 58.064453 19.322266 C 53.036797 8.9744219 42.663731 2.9651371 31.880859 3 z M 31.533203 4.9863281 C 34.613636 4.9329984 37.755719 5.4107969 40.835938 6.4785156 C 47.596938 8.8225156 53.151391 13.755359 56.275391 20.193359 C 59.400391 26.631359 59.837141 34.048547 57.494141 40.810547 C 52.613141 54.890547 37.243109 62.34875 23.162109 57.46875 C 9.0811094 52.58875 1.6239062 37.217719 6.5039062 23.136719 C 10.316406 12.135938 20.531658 5.1767914 31.533203 4.9863281 z M 31.638672 8.3183594 C 30.803672 8.3063594 29.968719 8.3399688 29.136719 8.4179688 C 28.584719 8.4359688 28.152875 8.8982188 28.171875 9.4492188 C 28.189875 10.001219 28.652125 10.433063 29.203125 10.414062 C 29.244125 10.413063 29.287125 10.409344 29.328125 10.402344 C 30.080125 10.324344 30.834844 10.286063 31.589844 10.289062 C 32.136844 10.213062 32.517406 9.7081094 32.441406 9.1621094 C 32.382406 8.7381094 32.059672 8.3983594 31.638672 8.3183594 z M 25.052734 9.2421875 C 24.923656 9.2280156 24.7885 9.2397969 24.65625 9.2792969 C 17.61925 11.420297 12.025656 16.787469 9.5976562 23.730469 C 9.4016563 24.246469 9.6617344 24.823531 10.177734 25.019531 C 10.693734 25.215531 11.270797 24.957406 11.466797 24.441406 C 11.473797 24.424406 11.479375 24.406672 11.484375 24.388672 L 11.449219 24.423828 C 13.664219 18.065828 18.787469 13.147359 25.230469 11.193359 C 25.759469 11.035359 26.058391 10.478219 25.900391 9.9492188 C 25.781891 9.5524687 25.439969 9.2847031 25.052734 9.2421875 z M 44.9375 14.75 C 42.5555 14.75 40.626953 16.6805 40.626953 19.0625 C 40.626953 21.4445 42.5565 23.376953 44.9375 23.376953 C 45.5515 23.376953 46.133109 23.243719 46.662109 23.011719 L 43.498047 19.742188 C 43.432047 19.674187 43.396391 19.581328 43.400391 19.486328 C 43.403391 19.391328 43.446578 19.301281 43.517578 19.238281 L 47.535156 15.640625 C 46.811156 15.089625 45.9175 14.75 44.9375 14.75 z M 48.0625 16.105469 L 44.253906 19.517578 L 47.298828 22.664062 C 48.471828 21.893062 49.248047 20.5715 49.248047 19.0625 C 49.248047 17.9145 48.7935 16.878469 48.0625 16.105469 z M 47.982422 18.152344 C 48.117234 18.144234 48.249953 18.21475 48.314453 18.34375 C 48.332453 18.38075 48.7595 19.26225 48.1875 20.40625 C 48.1265 20.52925 48.003 20.599609 47.875 20.599609 C 47.823 20.599609 47.76875 20.5875 47.71875 20.5625 C 47.54575 20.4765 47.4755 20.26775 47.5625 20.09375 C 47.9715 19.27675 47.6985 18.677344 47.6875 18.652344 C 47.6055 18.479344 47.677609 18.2715 47.849609 18.1875 C 47.892609 18.16675 47.937484 18.155047 47.982422 18.152344 z M 39.408203 21.658203 C 38.765203 21.685953 38.0355 21.842 37.25 22.125 C 34.125 23.25 30.375 27.375 30.375 27.375 L 27.367188 30.863281 L 29.835938 33.289062 L 41.044922 21.962891 C 40.607422 21.731891 40.051203 21.630453 39.408203 21.658203 z M 41.601562 22.396484 L 30.333984 33.78125 L 31.789062 35.212891 L 40.25 26.630859 C 40.275 26.606859 42.099766 24.806031 42.009766 23.207031 C 41.926766 22.890031 41.791562 22.615484 41.601562 22.396484 z M 41.771484 25.876953 C 41.285484 26.589953 40.785188 27.085953 40.742188 27.126953 L 32.287109 35.701172 L 33.410156 36.806641 C 33.524156 36.702641 33.634047 36.606 33.748047 36.5 C 39.841047 30.85 41.123484 28.439953 41.771484 25.876953 z M 26.908203 31.394531 L 24.125 34.625 L 29.228516 33.675781 L 26.908203 31.394531 z M 29.720703 34.158203 L 27.962891 35.978516 L 31.083984 35.498047 L 29.720703 34.158203 z M 31.705078 36.111328 L 27.160156 36.810547 L 18.828125 45.433594 L 22.324219 48.871094 L 22.5 48.875 L 21.625 45.25 C 21.625 45.25 26.445578 43.060391 32.892578 37.275391 L 31.705078 36.111328 z M 51.742188 37.121094 C 51.358984 37.191078 51.037266 37.482469 50.947266 37.886719 C 50.834266 38.393719 51.127047 38.903594 51.623047 39.058594 L 53.552734 39.574219 C 54.091734 39.694219 54.626094 39.355406 54.746094 38.816406 C 54.859094 38.309406 54.564359 37.799531 54.068359 37.644531 L 52.140625 37.128906 C 52.005875 37.098906 51.869922 37.097766 51.742188 37.121094 z M 50.042969 41.828125 C 49.654844 41.794 49.265766 41.990219 49.072266 42.355469 C 48.826266 42.819469 48.981734 43.394875 49.427734 43.671875 L 51.158203 44.667969 C 51.640203 44.942969 52.254297 44.774969 52.529297 44.292969 C 52.804297 43.810969 52.636297 43.196875 52.154297 42.921875 L 50.423828 41.941406 C 50.301828 41.876656 50.172344 41.8395 50.042969 41.828125 z M 46.832031 45.832031 C 46.576406 45.832031 46.322453 45.93 46.126953 46.125 C 45.736953 46.515 45.736953 47.147109 46.126953 47.537109 L 47.539062 48.951172 C 47.929063 49.341172 48.561172 49.341172 48.951172 48.951172 C 49.341172 48.561172 49.341172 47.927109 48.951172 47.537109 L 47.539062 46.125 C 47.344063 45.93 47.087656 45.832031 46.832031 45.832031 z M 18.341797 45.9375 L 15.625 48.75 L 21.308594 48.853516 L 18.341797 45.9375 z M 42.669922 48.9375 C 42.541453 48.953781 42.415875 48.995453 42.296875 49.064453 C 41.821875 49.342453 41.659547 49.953688 41.935547 50.429688 L 42.925781 52.152344 C 43.184781 52.640344 43.788391 52.825406 44.275391 52.566406 C 44.763391 52.307406 44.948453 51.703797 44.689453 51.216797 C 44.678453 51.196797 44.66825 51.17525 44.65625 51.15625 L 43.660156 49.425781 C 43.451656 49.068781 43.055328 48.888656 42.669922 48.9375 z M 38.236328 50.886719 C 38.107875 50.867922 37.975297 50.873453 37.841797 50.908203 C 37.839797 50.909203 37.838891 50.908203 37.837891 50.908203 C 37.304891 51.050203 36.985906 51.599813 37.128906 52.132812 C 37.129906 52.134813 37.129859 52.135672 37.130859 52.138672 L 37.646484 54.068359 C 37.811484 54.595359 38.372437 54.887656 38.898438 54.722656 C 39.394438 54.567656 39.689172 54.059734 39.576172 53.552734 L 39.060547 51.623047 C 38.956297 51.222547 38.621688 50.943109 38.236328 50.886719 z"></path>
		</svg>
	);
	const nestJs_logo = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="25"
			height="25"
			viewBox="0 0 48 48"
		>
			<path
				fill-black
				d="M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z"
			></path>
			<path
				fill-black
				d="M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z"
			></path>
			<path
				fill-black
				d="M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z"
			></path>
			<path
				fill-black
				d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
			></path>
			<path
				fill-black
				d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
			></path>
		</svg>
	);
	const streamlit_logo = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="30"
			height="30"
			viewBox="0 0 50 50"
		>
			<path d="M49.42 15.55c0 0-6.18 18.8-6.2 18.83L35 20.22l12.25-6.54c.57-.3 1.22-.22 1.7.19C49.44 14.28 49.62 14.94 49.42 15.55zM40.18 33.14L17.37 19.46l6.29-10.22c.27-.46.76-.73 1.28-.74.48 0 1.02.25 1.3.69L40.18 33.14zM40.22 35.5H9.81c-1.07 0-2.03-.68-2.4-1.69L.6 15.6c-.23-.6-.06-1.28.42-1.71.48-.43 1.15-.51 1.72-.21L40.22 35.5z"></path>
		</svg>
	);
	const titleDict = [
		{
			title: "Media Tracker",
			tags: ["personal"],
			description:
				"A Letterboxd, Goodreads, Fable clone. Users keep track of the different forms of media they consumed ranging from Movies, TV shows, Video Games, Books and Board games. This app uses external APIs for users to save consumed media on. Users can also custom watchlists and rank their favorite forms of media. Work in progress.",
			link: "https://github.com/matereyes00/api_app",
			stack: [
				<FontAwesomeIcon icon={faHtml5} size="lg" />,
				<FontAwesomeIcon icon={faCss3} size="lg" />,
				<box-icon type="logo" name="django" size="sm" />,
				<FontAwesomeIcon icon={faBootstrap} size="lg" />,
				<FontAwesomeIcon icon={faDocker} size="lg" />,
				<box-icon type="logo" name="postgresql" size="sm" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
				<FontAwesomeIcon icon={faPython} size="lg" />,
			],
		},
		{
			title: "To Do List",
			tags: ["personal"],
			description:
				"Simple to do list app that uses REST API to create, edit, and delete lists. Work in progress.",
			link: "https://github.com/matereyes00/toDoList",
			stack: [
				nestJs_logo,
				postman_logo,
				<box-icon type="logo" name="nodejs" />,
				<FontAwesomeIcon icon={faDocker} size="lg" />,
				<box-icon type="logo" name="postgresql" size="sm" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
			],
		},
		{
			title: "I-HOPE",
			tags: ["personal", "school_project"],
			description:
				"UI for the flow of data in my study. Users can view the current location of all existing RHUs in the Philippines and work their way towards determining the number of RHUs needed per city in a region. The site only accommodates region 1 data. Work in progress.",
			link: "https://github.com/matereyes00/iHOPE",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				// "pandas",
				streamlit_logo,
				// pytorch,
				jupyter_logo,
				<FontAwesomeIcon icon={faFigma} size="lg" />,
				qgis_logo,
			],
			deployedProject: "",
		},
		{
			title: "Rock, Paper, Scissors",
			tags: ["school_project", "personal"],
			description:
				"A rock paper scissors game that uses sockets for users to play remotely.",
			link: "https://github.com/matereyes00/CSCI70-group-files/tree/master/Group%20Game",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
			],
		},
		{
			title: "Fake News Spread Simulation",
			tags: ["school_project"],
			description:
				"A requirement for CSCI 115: Simulation class to observe the impact of fake-bots on X spreading misinformation and fake news.",
			link: "",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				jupyter_logo,
				// "simpy",
			],
			deployedProject:
				"https://drive.google.com/file/d/1ZOfkFYkSptU2AHnAvQHsWKJDl_D75sAZ/view?usp=sharing",
		},
		{
			title: "Plant Infinity",
			tags: ["school_project"],
			description:
				"The aim of this project is to demonstrate the behavior of an agent using Depth First Search and Breadth First Search. The agent's actions are to plant a seed, check the plant's status, water, and harvest the plant. It's a mini game to showcase the navigation of an agent in its environment.",
			link: "#",
			stack: [<FontAwesomeIcon icon={faPython} size="lg" />, jupyter_logo],
			deployedProject:
				"https://colab.research.google.com/drive/1QwDtTOLzgW08U26NKhIUt3NW_Bu8qyfR?usp=sharing",
		},
		{
			title: "LostNFound",
			tags: ["school_project"],
			description:
				"Final requirement project for CSCI 281: Android Development. The task was to create a basic application that integrates all the concepts and modules delivered in the class. The aim of LostNFound is an improved version of an Ateneo facebook group. Members of the school can post pictures and claim items.",
			link: "https://github.com/matereyes00/LostNFound",
			stack: [
				<box-icon type="logo" name="android" size="md" />,
				<FontAwesomeIcon icon={faJava} size="lg" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
			],
			deployedProject: "#",
		},
		{
			title: "Boodle",
			tags: ["school_project"],
			description:
				"This is an iterative project for our introduction to software engineering class. We decided to model an ecommerce website where users can buy and sell items. As buyers, users can bid on items they want for themselves. They can set the price and other users can see the highest bid priced for a specific item. As sellers, users can create their own shop where they can list items for bidding.",
			link: "#",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				<box-icon type="logo" name="django" size="sm" />,
				<HugeiconsIcon icon={SqlIcon} />,
				<box-icon type="logo" name="postgresql" size="sm" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
				<FontAwesomeIcon icon={faGitlab} size="lg" />,
			],
			deployedProject: "#",
		},
		{
			title: "Blizard Blast",
			tags: ["school_project"],
			description:
				"This is a final project for our introduction to databases class. The task was to create a database for a real-world application. My group was assigned to a milkshare company. Our database is a static website designed for admin use. The user can view the store's inventory and keep track of different customer's orders.The idea was to demonstrate SQL querying in the context of a business setting.",
			link: "https://github.com/matereyes00/Blizzard-Blast",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				<box-icon type="logo" name="django" size="sm" />,
				<HugeiconsIcon icon={SqlIcon} />,
				<box-icon type="logo" name="postgresql" size="sm" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
				<FontAwesomeIcon icon={faGitlab} size="lg" />,
			],
			deployedProject: "#",
		},
		{
			title: "Byte: Startup Summit 2022",
			tags: ["organization"],
			description:
				"This is a website for one of Byte's, an Ateneo organization, flagship projects: Startup Summit (SuS) for 2022. The task was to build a static website where users and participants could view information on the event.",
			link: "https://github.com/BYTE-ADMU/startup-summit-2022",
			stack: [
				<FontAwesomeIcon icon={faJs} size="lg" />,
				<FontAwesomeIcon icon={faHtml5} size="lg" />,
				<FontAwesomeIcon icon={faCss3} size="lg" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
				<FontAwesomeIcon icon={faFigma} size="lg" />,
				<FontAwesomeIcon icon={faReact} size="lg" />,
			],
		},
		{
			title: "Edsa Interactive",
			tags: ["organization"],
			deployedProject:
				"https://interactive.theguidon.com/2023/02/from-the-hill-to-edsa/#battle-in-the-broadsheets",
			description:
				"This is a website for The Guidon's EDSA interactive for the EDSA Revolution's 37th anniversary. The website features different articles highlighting Ateneo's involvement and activism against the Marcoses.",
			link: "https://github.com/theguidon/edsa-interactive-2223",
			stack: [
				<FontAwesomeIcon icon={faHtml5} size="lg" />,
				<FontAwesomeIcon icon={faCss3} size="lg" />,
				<FontAwesomeIcon icon={faJs} size="lg" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
				<FontAwesomeIcon icon={faFigma} size="lg" />,
				<box-icon type="logo" name="wordpress" size="sm" />,
				// "xampp",
			],
		},
	];

	const projects = titleDict.map((item, idx) => (
		<ProjectCard
			key={idx}
			projectDescription={item.description}
			projectTitle={item.title}
			projectLink={item.link}
			projectStack={item.stack}
			deployedProjectLink={item.deployedProject}
		/>
	));

	return (
		<>
			<h1 className="font-bold text-4xl">Projects</h1>

			<div className="w-4/5 mx-auto grid lg:grid-flow-col lg:grid-rows-4 gap-4">
				{projects}
			</div>
		</>
	);
};

export default Projects;
