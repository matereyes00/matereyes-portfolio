import { React } from "react";
import ProjectCard from "../Features/Projects/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import {
	// faCss3,
	// faGitlab,
	// faDocker,
	// faBootstrap,
	// faGit,
	faJs,
	faPython,
	// faJava,
	// faFigma,
	faReact,
	// faHtml5,
	// faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {useFirestoreCollection} from '../hooks/useFirestoreCollectionHook'

const MiniProjects = () => {
	const { data: miniProjectsData, loading } = useFirestoreCollection('miniProjects');

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
	const titleDict = [
		{
			title: "Maze 2.0",
			tags: ["for fun", "academics"],
			deployedProject: "/mini-projects/maze",
			description:
				"My first major coding project was to create a maze using Python coding concepts taught during the first semester of my freshman year. The objective was to move around the maze (up, down, left right) until you reach the exit. Physically, i got out okay but not happy with my output. Mentally, it was challenging. Although I came from a STEM background, I knew how to solve problems but from a high level perspective. Programming was a new territory. I got help from stack overflow but with all the copypasting, I barely remember how the code cohesively works. Now, I know how to approach problems more efficiently using a structured approach. I re-coded my maze in Python. I finished it in a day using a single jupyter notebook in a 128 lines (way less than my original 600+ lines). I understand the flow better and can explain each component. I don't know why I did this but it's something I wanted to prove to myself I can do, because I've been getting impostor syndrome a lot more after college. I migrated the code to javascript where a simple frontend rendering of the maze can be done for players to interact with. It's slightly more complex, adding in other components to the maze.",
			link: "https://colab.research.google.com/drive/1QwDtTOLzgW08U26NKhIUt3NW_Bu8qyfR?usp=sharing",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				<FontAwesomeIcon icon={faJs} size="lg" />,
				<FontAwesomeIcon icon={faReact} size="lg" />,
				jupyter_logo,
			],
			isExternal: false,
		},
		{
			title: "Steak Timer Dashboard",
			tags: ["for fun"],
			deployedProject: "/mini-projects/steak-dashboard",
			description: "Learned how to use react hooks.",
			link: "#",
			stack: [],
			isExternal: false,
		},
		{
			title: "Toggle Dark Mode",
			tags: ["for fun"],
			deployedProject: "/mini-projects/toggle-dark-mode",
			description:
				"Learned how to draw elements using html and animate these using Tailwindcss.",
			link: "#",
			stack: [],
			isExternal: false,
		},
		{
			title: "The Summer I Turned Pretty Dashboard",
			tags: ["for fun"],
			deployedProject: "https://dev-journey-tsitp-dashboard.streamlit.app/",
			description:
				"With the final season of The Summer I turned pretty coming to an end, I thought it would be fun to look at the overall series as a whole and how it impacted the fans of the series.",
			link: "https://github.com/matereyes00/dev-journey/tree/learn-dashboard",
			stack: [<FontAwesomeIcon icon={faPython} size="lg" />],
			isExternal: true,
		},
		{
			title: "Algorithm Visualization",
			tags: ["for fun"],
			deployedProject: "/mini-projects/algorithm-visualizer",
			description:
				"This project acts as a visualizing tool for users to understand how the different data structures and algorithms work. I was able to grasp the foundations of React and how to apply the basic functionalities through the behavior of stacks, arrays queues, etc.",
			link: "#",
			stack: [
				<FontAwesomeIcon icon={faJs} size="lg" />,
				<FontAwesomeIcon icon={faReact} size="lg" />,
			],
			isExternal: false,
		},
		{
			title: "Flood Control",
			tags: ["for fun"],
			deployedProject: "https://matereyes00.github.io/flood-control/",
			description: (
				<>
					This project acts as a visualizing tool for users to understand the flood control scandal. 
					This project is inspired from @wreckzonee from <a 
						href='https://www.tiktok.com/@wreckzonee/video/7548848135553043719' 
						target='_blank' 
						rel="noopener noreferrer" 
						className="text-blue-400 hover:underline" // Optional: add styling
					>
						TikTok
					</a>. It adds a feature where users can spend over a trillion pesos on both government projects and luxury items to see firsthand where their hard earned money goes to.
				</>
			),
			link: "#",
			stack: [
				<FontAwesomeIcon icon={faJs} size="lg" />,
				<FontAwesomeIcon icon={faReact} size="lg" />,
			],
			isExternal: true,
		},
	];
	const miniProjects = titleDict.map((item, idx) => (
		<ProjectCard
			key={idx}
			projectDescription={item.description}
			projectTitle={item.title}
			projectLink={item.link}
			projectStack={item.stack}
			deployedProjectLink={item.deployedProject}
		/>
	));

	if (loading) {
        return <h1 className="text-4xl m-4">Loading Mini Projects...</h1>
    }

	return (
		<>
			<h1 className="text-4xl m-4">Mini projects</h1>
			<div className="grid grid-cols-3 gap-4 m-24">{miniProjects}</div>
		</>
	);
};

export default MiniProjects;
