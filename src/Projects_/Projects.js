import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

import react_logo from "../images/logo.svg";
import python from "../images/python.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/javascript.svg";
import android_studio from "../images/android-studio.svg";
import django from "../images/django.svg";
import jupyter from "../images/jupyter.svg";
import streamlit from "../images/streamlit.svg";
import tableau from "../images/tableau-software.svg";
import pytorch from "../images/pytorch.svg";
import postgres from "../images/postgresql.svg";
import quasar from "../images/quasar.svg";
import figma from "../images/figma.svg";
import qgis from "../images/qgis.svg";
import git from "../images/git.svg";
import docker from "../images/docker-svgrepo-com.svg";
import postman from "../images/postman-icon-svgrepo-com.svg";
import tailwind from "../images/tailwind-svgrepo-com.svg";

const Projects = () => {
    const titleDict = [
           {
                title: 'Media Tracker',
                tags:['personal'],
                description: 'A Letterboxd, Goodreads, Fable clone. Users keep track of the different forms of media they consumed ranging from Movies, TV shows, Video Games, Books and Board games. This app uses external APIs for users to save consumed media on. Users can also custom watchlists and rank their favorite forms of media. ',
                link: "https://github.com/matereyes00/api_app",
                stack: [html, css, django, 'bootstrap', docker, postgres]

            },
            {
                title: 'To Do List',
                tags:['personal'],
                description: 'Simple to do list app that uses REST API to create, edit, and delete lists.',
                link:  "https://github.com/matereyes00/toDoList",
                stack: ['nestjs', postman, docker, postgres]

            },
            {
                title: 'I-HOPE',
                tags:['personal', 'school_project'],
                description: "UI for the flow of data in my study",
                link: "https://github.com/matereyes00/iHOPE",
                stack: [python, 'pandas',streamlit, pytorch, figma, qgis],

            },
            {
                title: 'Rock, Paper, Scissors',
                tags:['school_project', 'personal'],
                description: 'A rock paper scissors game that uses sockets for users to play remotely.',
                link: "https://github.com/matereyes00/CSCI70-group-files/tree/master/Group%20Game",
                stack: ['python'],

            },
          {
                title: 'Fake News Spread Simulation',
                tags:['school_project'],
                description: 'A requirement for CSCI 115: Simulation class to observe the impact of fake-bots on X spreading misinformation and fake news.',
                link: "#",
                stack: [python, 'simpy', jupyter],
            },
           {
                title: 'Plantitas',
                tags:['school_project'],
                description: 'Final project requirement for CSCI 111: Introduction to Artificial Intelligent. The aim of this project is to demonstrate the behavior of an AI model ',
                link: "#",
                stack: ['python'],
            },
           {
                title: 'LostNFound',
                tags:['school_project'],
                description: 'Final requirement project for CSCI 281: Android Development. The task was to create a basic application that integrates all the concepts and modules delivered in the class. The aim of LostNFound is an improved version of an Ateneo facebook group. Members of the school can post pictures and claim items.',
                link: "https://github.com/matereyes00/LostNFound",
                stack: [android_studio, 'java']
            },
          {
                title: 'Boodle',
                tags:['school_project'],
                description: "",
                link: "#",
                stack: [python, django, 'SQL', postgres]
            },
            {
                title: 'Blizard Blast',
                tags:['school_project'],
                description: "",
                link: "#",
                stack: [python, django, 'SQL', postgres]
            },
            {
                title: 'Byte: Summit 2022',
                tags:['organization'],
                description: "",
                link: "#",
                stack: ['xampp', js, html, css, 'wordpress']
            },
            {
                title: 'Edsa:',
                tags:['organization'],
                description: "",
                link: "#",
                stack: [react_logo,]
            },
        ];
    
    const projects = titleDict.map( (item, idx) => (
        <ProjectCard key={idx} projectDescription={item.description} projectTitle={item.title} projectLink={item.link} projectStack={item.stack}/>
    ))
    
    return (
        <>
            <h1 className='font-bold text-4xl'>Projects</h1>
            <div className='w-4/5 mx-auto grid grid-flow-row grid-rows-7 gap-7'>
                {projects}
            </div>
        </>
    );
}

export default Projects;