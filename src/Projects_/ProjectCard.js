import React from "react";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../images/github.svg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProjectCard = ({
	projectTitle,
	projectDescription,
	projectLink,
	deployedProjectLink,
	projectStack, isExternal
}) => {

	return (
		<>
			<div className="border-2 border-slate-900 rounded-xl p-1">
				<div
					className="flex flex-row justify-center mt-3 border-b-2 border-slate-900 
                w-2/3 mx-auto">
					{isExternal ? (
						<a href={deployedProjectLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
							<h1 className="text-2xl">{projectTitle}</h1>
							<FontAwesomeIcon
							icon={faExternalLink}
							size="xs"
							style={{ color: "black" }}
							className="ml-1 mb-4"
							/>
						</a>
						) : (
						<Link to={deployedProjectLink} className="flex flex-row items-center">
							<h1 className="text-2xl">{projectTitle}</h1>
							<FontAwesomeIcon
							icon={faExternalLink}
							size="xs"
							style={{ color: "black" }}
							className="ml-1 mb-4"
							/>
						</Link>
						)}
				</div>

				<div className="flex flex-wrap flex-row justify-around w-2/3 flex-auto my-3 mx-auto">
					{projectStack.map((stackItem, index) => (
						<div key={index} className="">
							{stackItem}
						</div>
					))}
				</div>

				<p>{projectDescription}</p>

				<a href={projectLink} target="_blank">
					<img src={github} alt="github-icon" className="w-10 h-10 mx-auto" />
				</a>
			</div>
		</>
	);
};

export default ProjectCard;
