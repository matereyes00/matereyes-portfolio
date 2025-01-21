// src/about/AboutStack.js
import React from 'react';
import StackItem from './StackItem';
import logo from '../../images/logo.svg';
import python_logo from '../../images/python.svg';
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import js from '../../images/javascript.svg';
import android_studio from '../../images/android-studio.svg';
import django from '../../images/django.svg';
import jupyter from '../../images/jupyter.svg';
import streamlit from '../../images/streamlit.svg';
import tableau from '../../images/tableau-software.svg';
import pytorch from '../../images/pytorch.svg';
import postgres from '../../images/postgresql.svg';
import quasar from '../../images/quasar.svg';
import figma from '../../images/figma.svg';
import qgis from '../../images/qgis.svg';
import git from '../../images/git.svg';
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