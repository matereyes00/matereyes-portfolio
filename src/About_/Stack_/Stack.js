import React, { useState } from 'react';
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
import github from '../../images/github.svg';
import './Stack.css';

const AboutStack = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const stackItems = [
        { name: "React", classifications: ['FMW'], image: logo },
        { name: "Python", classifications: ['BE', 'DST'], image: python_logo },
        { name: "HTML", classifications: ['FE'], image: html },
        { name: "CSS", classifications: ['FE'], image: css },
        { name: "JavaScript", classifications: ['BE'], image: js },
        { name: "Android Studio", classifications: ['MD'], image: android_studio },
        { name: "Django", classifications: ['FMW'], image: django },
        { name: "Jupyter", classifications: ['DST'], image: jupyter },
        { name: "Streamlit", classifications: ['FMW', 'DST'], image: streamlit },
        { name: "Tableau", classifications: ['DST'], image: tableau },
        { name: "PyTorch", classifications: ['DST'], image: pytorch },
        { name: "Postgres", classifications: ['DB'], image: postgres },
        { name: "Quasar", classifications: ['FMW'], image: quasar },
        { name: "Figma", classifications: ['CT'], image: figma },
        { name: "QGIS", classifications: ['GT'], image: qgis },
        { name: "Git", classifications: ['CT'], image: git },
        { name: "Github", classifications: ['CT'], image: github }
    ];
    const classification = [
        { code: 'FMW', label: 'Web Frameworks' },
        { code: 'BE', label: 'Backend' },
        { code: 'DST', label: 'Data Science Tools' },
        { code: 'FE', label: 'Frontend' },
        { code: 'DB', label: 'Database' },
        { code: 'CT', label: 'Collaboration Tools' },
        { code: 'GT', label: 'Geography Tools' }
    ];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = stackItems.filter((item) => {
        if (selectedCategory === 'All') return true;
        return item.classifications.includes(selectedCategory);
    });

    function chunkArray(array, chunkSize) {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    }

    return (
        <div>
            <div className="filter-container">
                {classification.map((category) => (
                    <button 
                        key={category.code} 
                        onClick={() => handleCategorySelect(category.code)}>
                        {category.label}
                    </button>
                ))}
            </div>
            <div className='stack-container'>
                {chunkArray(filteredItems, 3).map((row, rowIndex) => (
                    <div key={rowIndex} className="row"> {/* Row container */}
                    {row.map((item, index) => (
                        <StackItem
                        key={index}
                        ItemName={item.name}
                        image={item.image}
                        className="Applogo"
                        />
                    ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutStack;
