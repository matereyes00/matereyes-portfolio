import React from "react";
import StackItem from "./StackItem";

import react_logo from "../../Assets/logo.svg";
import python_logo from "../../Assets/python.svg";
import html from "../../Assets/html.svg";
import css from "../../Assets/css.svg";
import js from "../../Assets/javascript.svg";
import android_studio from "../../Assets/android-studio.svg";
import django from "../../Assets/django.svg";
import jupyter from "../../Assets/jupyter.svg";
import streamlit from "../../Assets/streamlit.svg";
import tableau from "../../Assets/tableau-software.svg";
import pytorch from "../../Assets/pytorch.svg";
import postgres from "../../Assets/postgresql.svg";
import quasar from "../../Assets/quasar.svg";
import figma from "../../Assets/figma.svg";
import qgis from "../../Assets/qgis.svg";
import git from "../../Assets/git.svg";
import github from "../../Assets/github.svg";
import docker_logo from "../../Assets/docker-svgrepo-com.svg";
import postman_logo from "../../Assets/postman-icon-svgrepo-com.svg";
import tailwind_logo from "../../Assets/tailwind-svgrepo-com.svg";

// docker
// postman

const Stack = () => {
	const images = {
		react_logo: { src: react_logo, name: "React" },
		python_logo: { src: python_logo, name: "Python" },
		html: { src: html, name: "HTML" },
		css: { src: css, name: "CSS" },
		js: { src: js, name: "JavaScript" },
		android_studio: { src: android_studio, name: "Android Studio" },
		django: { src: django, name: "Django" },
		jupyter: { src: jupyter, name: "Jupyter" },
		streamlit: { src: streamlit, name: "Streamlit" },
		tableau: { src: tableau, name: "Tableau" },
		pytorch: { src: pytorch, name: "Pytorch" },
		postgres: { src: postgres, name: "Postgres" },
		quasar: { src: quasar, name: "Quasar" },
		figma: { src: figma, name: "Figma" },
		qgis: { src: qgis, name: "QGIS" },
		git: { src: git, name: "Git" },
		github: { src: github, name: "Github" },
		docker_logo: { src: docker_logo, name: "Docker" },
		postman_logo: { src: postman_logo, name: "Postman" },
		tailwind_logo: { src: tailwind_logo, name: "Tailwind CSS" },
	};

	return (
		<>
			<div className="grid grid-flow-col grid-rows-7 gap-7 bg-opacity-40 justify-items-center items-center">
				{Object.keys(images).map((key, index) => {
					const { src, name } = images[key];
					return <StackItem key={index} image={src} ItemName={name} />;
				})}
			</div>
		</>
	);
};

export default Stack;
