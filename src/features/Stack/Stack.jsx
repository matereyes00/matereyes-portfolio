import React, { useState } from "react";
import Select from "react-dropdown-select";

import StackItem from "./StackItem";

import react_logo from "../../assets/logo.svg";
import python_logo from "../../assets/python.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/javascript.svg";
import android_studio from "../../assets/android-studio.svg";
import django from "../../assets/django.svg";
import jupyter from "../../assets/jupyter.svg";
import streamlit from "../../assets/streamlit.svg";
import tableau from "../../assets/tableau-software.svg";
import pytorch from "../../assets/pytorch.svg";
import postgres from "../../assets/postgresql.svg";
import quasar from "../../assets/quasar.svg";
import figma from "../../assets/figma.svg";
import qgis from "../../assets/qgis.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import docker_logo from "../../assets/docker-svgrepo-com.svg";
import postman_logo from "../../assets/postman-icon-svgrepo-com.svg";
import tailwind_logo from "../../assets/tailwind-svgrepo-com.svg";

// docker
// postman

const AboutStack = () => {
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

export default AboutStack;
