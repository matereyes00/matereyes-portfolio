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

// import android_studio from "../images/android-studio.svg";
// import django from "../images/django.svg";
// import jupyter from "../images/jupyter.svg";
// import streamlit from "../images/streamlit.svg";
// import tableau from "../images/tableau-software.svg";
// import pytorch from "../images/pytorch.svg";
// import postgres from "../images/postgresql.svg";
// import quasar from "../images/quasar.svg";
// import qgis from "../images/qgis.svg";
// import postman from "../images/postman-icon-svgrepo-com.svg";
// import tailwind from "../images/tailwind-svgrepo-com.svg";

const Projects = () => {
	const titleDict = [
		{
			title: "Media Tracker",
			tags: ["personal"],
			description:
				"A Letterboxd, Goodreads, Fable clone. Users keep track of the different forms of media they consumed ranging from Movies, TV shows, Video Games, Books and Board games. This app uses external APIs for users to save consumed media on. Users can also custom watchlists and rank their favorite forms of media. ",
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
				"Simple to do list app that uses REST API to create, edit, and delete lists.",
			link: "https://github.com/matereyes00/toDoList",
			stack: [
				// "nestjs",
				// postman,
				<FontAwesomeIcon icon={faDocker} size="lg" />,
				<box-icon type="logo" name="postgresql" size="sm" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
			],
		},
		{
			title: "I-HOPE",
			tags: ["personal", "school_project"],
			description: "UI for the flow of data in my study",
			link: "https://github.com/matereyes00/iHOPE",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				// "pandas",
				<box-icon type="logo" name="streamlit" size="sm" />,
				// pytorch,
				<FontAwesomeIcon icon={faFigma} size="lg" />,
				// qgis,
			],
		},
		{
			title: "Rock, Paper, Scissors",
			tags: ["school_project", "personal"],
			description:
				"A rock paper scissors game that uses sockets for users to play remotely.",
			link: "https://github.com/matereyes00/CSCI70-group-files/tree/master/Group%20Game",
			stack: [<FontAwesomeIcon icon={faPython} size="lg" />],
		},
		{
			title: "Fake News Spread Simulation",
			tags: ["school_project"],
			description:
				"A requirement for CSCI 115: Simulation class to observe the impact of fake-bots on X spreading misinformation and fake news.",
			link: "#",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				// "simpy",
				<box-icon type="logo" name="jupyter" size="sm" />,
			],
		},
		{
			title: "Plantitas",
			tags: ["school_project"],
			description:
				"Final project requirement for CSCI 111: Introduction to Artificial Intelligent. The aim of this project is to demonstrate the behavior of an AI model ",
			link: "#",
			stack: [<FontAwesomeIcon icon={faPython} size="lg" />],
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
			],
		},
		{
			title: "Boodle",
			tags: ["school_project"],
			description: "",
			link: "#",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				<box-icon type="logo" name="django" size="sm" />,
				<HugeiconsIcon icon={SqlIcon} />,
				<box-icon type="logo" name="postgresql" size="sm" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
				<FontAwesomeIcon icon={faGitlab} size="lg" />,
			],
		},
		{
			title: "Blizard Blast",
			tags: ["school_project"],
			description: "",
			link: "#",
			stack: [
				<FontAwesomeIcon icon={faPython} size="lg" />,
				<box-icon type="logo" name="django" size="sm" />,
				<HugeiconsIcon icon={SqlIcon} />,
				<box-icon type="logo" name="jupyter" size="sm" />,
				<FontAwesomeIcon icon={faGit} size="lg" />,
				<FontAwesomeIcon icon={faGitlab} size="lg" />,
			],
		},
		{
			title: "Byte: Summit 2022",
			tags: ["organization"],
			description: "",
			link: "#",
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
			title: "Edsa:",
			tags: ["organization"],
			description: "",
			link: "#",
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
		/>
	));

	return (
		<>
			<h1 className="font-bold text-4xl">Projects</h1>

			<div className="w-4/5 mx-auto grid grid-flow-col grid-rows-4 gap-4">
				{projects}
			</div>
		</>
	);
};

export default Projects;
