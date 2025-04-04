import { React } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import ProjectCard from "../ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SqlIcon } from "@hugeicons/core-free-icons";

const MiniProjects = () => {
	const titleDict = [
		{
			title: "Maze 2.0",
			tags: ["for fun", "academics"],
			deployedProject:"/mini-projects/maze",
			description:
				"My first major coding project was to create a maze using the introductory python coding concepts taught during the first semester. The objective was to move around the maze (up, down, left right) until you reach the exit. Physically, i got out okay but not happy with my output. Mentally, it was challenging. Although I came from a STEMbackground, I did not know how to think like a computer scientist. Ionly knew how to solve problems as they are given to me like usingformulas to substitute values or memorize the periodic table or even famliarize myself with some scientific concept. But programming was anew territory. I mostly got help from stack overflow. With all the copypasting, I barely remember the code's flow or how anything cohesively works together. Now, I know how to approach problems more efficiently and organize the steps to take. I recoded my maze in Python, as I remember the specfications. I finished it in a day using a single jupyter notebook in a 128 lines. I don't remember much but one thing's for sure, my old code definitely more lines than that. I understand the flow better and can explain each component. I don't know why I did this but I guess it's something I wanted to prove to myself I can do, because I've been getting impostor syndrome a lot more after college.",
			link: "https://colab.research.google.com/drive/1QwDtTOLzgW08U26NKhIUt3NW_Bu8qyfR?usp=sharing",
			stack: [ ],
			isExternal: false,
		},
		{
			title: "Steak Timer Dashboard",
			tags: ["for fun", ],
			deployedProject:"/mini-projects/steak-dashboard",
			description:
				"Learned how to use react hooks.",
			link: "#",
			stack: [ ],
			isExternal: false,
		}
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
	return (
		<>
			<h1>Mini projects</h1>
			{miniProjects}
		</>
	);
};

export default MiniProjects;
