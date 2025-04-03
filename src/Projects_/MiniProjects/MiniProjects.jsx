import { React } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom

const MiniProjects = () => {
	const projectDescriptions = (
		<>
			<p>
				My first major coding project was to create a maze using the
				introductory python coding concepts taught during the first semester.
				The objective was to move around the maze (up, down, left right) until
				you reach the exit. Physically, i got out okay but not happy with my
				output. Mentally, it was challenging. Although I came from a STEM
				background, I did not know how to think like a computer scientist. I
				only knew how to solve problems as they are given to me like using
				formulas to substitute values or memorize the periodic table or even
				famliarize myself with some scientific concept. But programming was a
				new territory. I mostly got help from stack overflow. With all the copy
				pasting, I barely remember the flow of my code or how anything works
				cohesively together.
			</p>
			<p>
				After years of experiencing different problems, I know how to approach
				problems better. I recoded my maze in Python, as I remember the
				specfications, and did surprisingly okay. I finished it in a day using a
				single jupyter notebook in a 128 lines. I don't remember much but one
				thing's for sure, my old code definitely more lines than that. I
				understand the flow better and can explain each component. I don't know
				why I did this but I guess it's something I wanted to prove to myself I
				can do, because I've been getting impostor syndrome a lot more after
				college.
			</p>
		</>
	);
	return (
		<>
			<h1>Mini projects</h1>
			<Link
				to="/mini-projects/steak-dashboard"
				className="text-lg hover:bg-blue-300"
			>
				Steak Dashboard
			</Link>
			<Link to="/mini-projects/maze" className="text-lg hover:bg-blue-300">
				Maze {projectDescriptions}
			</Link>
		</>
	);
};

export default MiniProjects;
