// src/about/AboutStack.js
import React from 'react';
// import StackItem from '../About_/Stack_/StackItem';
// import linkedin_img from '/images/linkedin.svg';
// import github_img from '/images/github.svg';
import {ReactComponent as linkedin_img} from '../images/linkedin.svg'
import '../About_/Stack_/Stack.css'; 

const Socials = () => {
    const ItemName = [
        "Linkedin", "Github"
    ];
    const linkedin_img = '../images/linkedin.svg'
    const github_img = '../images/github.svg'
    const socialsImgs = [
        linkedin_img, github_img
    ];
    return (
        <div className='stack-container'>
            {ItemName.map((index) => (
                <img
                    src={socialsImgs[index]} // Accessing the corresponding logo image
                    alt={ItemName[index]}
                />
            ))}
        </div>
    );
};

export default Socials;