// src/about/AboutStack.js
import React from 'react';
import '../About_/Stack_/Stack.css'; 
// import './Home.css'; 
import StackItem from '../About_/Stack_/StackItem';
import github_img from '../images/github.svg'
import linkedin_img from '../images/linkedin.svg'
import orcid_img from '../images/orcid.svg'
import socialsimg from '../images/decentmate.jpg';


const socials = () => {
    const ItemName = ["Linkedin", "Github", "ORCID"];
    const socialLinks = ["https://www.linkedin.com/in/martina-therese-reyes-8b490a205/", "https://github.com/matereyes00", "https://orcid.org/0009-0005-6656-2780"];
    const socialsImgs = [linkedin_img, github_img, orcid_img];
    return (
        <>
        <img src={socialsimg} alt="social-icon" id="socials-tab-img" />

        <div className='socials-container'>
            {ItemName.map((name, index) => (
                <div id={name}>
                    <a href={socialLinks[index]} target='_blank'><StackItem
                    key={index} // Always include a key when rendering lists in React
                    // ItemName={name}
                    image={socialsImgs[index]} // Accessing the corresponding logo image
                    className="socialslogo"
                    /></a>
                </div>
            ))}
        </div>
        </>
    );
};

export default socials;