// src/about/AboutStack.js
import React from 'react';
import StackItem from './StackItem';
import logo from '../../Assets/logo.svg';
import python_logo from '../../Assets/python.svg';
import html from '../../Assets/html.svg';
import css from '../../Assets/css.svg';
import js from '../../Assets/javascript.svg';
import android_studio from '../../Assets/android-studio.svg';
import django from '../../Assets/django.svg';
import jupyter from '../../Assets/jupyter.svg';
import streamlit from '../../Assets/streamlit.svg';
import tableau from '../../Assets/tableau-software.svg';
import pytorch from '../../Assets/pytorch.svg';
import postgres from '../../Assets/postgresql.svg';
import quasar from '../../Assets/quasar.svg';
import figma from '../../Assets/figma.svg';
import qgis from '../../Assets/qgis.svg';
import git from '../../Assets/git.svg';
import './Stack.css'; 


const AboutStack = () => {
    const ItemName = [
        "React", "Python", "HTML", "CSS", "JavaScript",
        "Android Studio", "Django", "Jupyter", "Streamlit",
        "Tableau", "PyTorch", "Postgres", "Quasar", "Figma",
        "QGIS", "Git"
    ];
    const stackItems = [
        logo, python_logo, html, css, js,
        android_studio, django, jupyter, streamlit,
        tableau, pytorch, postgres, quasar, figma,
        qgis, git
    ];
    return (
        <div>
            <div className='stack-container'>
                {/* Map over ItemName and stackItems */}
                {ItemName.map((name, index) => (
                    <StackItem
                        key={index} // Always include a key when rendering lists in React
                        ItemName={name}
                        image={stackItems[index]} // Accessing the corresponding logo image
                        className="Applogo"
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutStack;