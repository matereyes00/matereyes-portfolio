import React from 'react';
import '../About.css';

const EventText = () => { 
    const content = "Hi! I'm Martina Reyes and I'm 24 years old. My nickname is Matê and my preferred pronouns are she/her. I am currently a Master of Science student taking up Computer Science in Ateneo de Manila University. I finished undergraduate degree as cum laude in Bachelor of Science in computer science with a specialization in Data Science and Analytics in the same university.";
    const content2 = "As an undergraduate student during the pandemic, I explored quite a few fields such as Web Development, User Experience Research and Design, and Data Science. I took up a few online courses on HTML, CSS, and basic JavaScript. I took electives related to web development: Web Accessibility and Creative CSS Development. I also learned how to use React, Django and CSS pre-processors like Tailwind CSS, SASS and STYLUS. I also learned the UX research process through my invovement with User Experience Society and my Human Computer Interaction class."
    const content3 = "I aspire for a career in Data Science. I enjoy learning and using platforms such as Coursera and Kaggle to increase my Data Science and Analytics skills. I have taken a few database classes that use SQL and noSQL (MongoDB and DynamoDB). I am also familiar with the basic usage of Tableau and Tableau Prep Builder from my Data Visualization elective and internship at Dashlabs.ai. My current thesis deals with using machine learning to search for optimal locations to put up Rural Health units in Sablayan, Occidental Mindoro."
    const content4 = "Currently, I am taking up my Master of Science degree in computer science. I am interested to hone my technical skills, improve in working as an individual and expand on my undergraduate thesis on a national scale. I was able to present my part of my research on the international stage at a public health conference held in Bankok, Thailand last August 2024."
    const content5 = "My personal goal is to use the knowledge, skills, and understanding I have in my course to help other people. I advocate for creating a positive social impact through my work and the skills I have to offer. I work well individually but perfer working collaboratively on a team. I empathize with others, value inclusive environments and adapt a growth mindset in any project or task I partake in."
    return (
        <>
        <p>{content}</p>
        <p>{content2}</p>
        <p>{content3}</p>
        <p>{content4}</p>
        <p>{content5}</p>
        </>
    );
};

export default EventText;