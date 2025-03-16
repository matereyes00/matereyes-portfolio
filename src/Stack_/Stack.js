import React, { useState } from 'react';
import Select from "react-dropdown-select";

import StackItem from './StackItem';


import react_logo from '../images/logo.svg';
import python_logo from '../images/python.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';
import js from '../images/javascript.svg';
import android_studio from '../images/android-studio.svg';
import django from '../images/django.svg';
import jupyter from '../images/jupyter.svg';
import streamlit from '../images/streamlit.svg';
import tableau from '../images/tableau-software.svg';
import pytorch from '../images/pytorch.svg';
import postgres from '../images/postgresql.svg';
import quasar from '../images/quasar.svg';
import figma from '../images/figma.svg';
import qgis from '../images/qgis.svg';
import git from '../images/git.svg';
import github from '../images/github.svg';
import docker_logo from '../images/docker-svgrepo-com.svg'
import postman_logo from '../images/postman-icon-svgrepo-com.svg'
import tailwind_logo from '../images/tailwind-svgrepo-com.svg'

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
            <div className='grid grid-flow-col grid-rows-6 gap-6 bg-purple-200 bg-opacity-40'>
            {Object.keys(images).map((key, index) => {
                    const { src, name } = images[key];
                    return <StackItem key={key} image={src} ItemName={name} />;
                })}
            </div>
        </>
    );
};

export default AboutStack;
