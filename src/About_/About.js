// src/About.js
import React, {useState} from 'react';
import AboutDescription from './About_Description';
import Milestone from './Milestones_/MileStone';
import './About.css'; 
import './Carousel'; 
import Button from '../Components/Button'; // Import the Button component
import Stack from './Stack_/Stack';
import Carousel from './Carousel';
import me1 from '../images/_0897.JPG';
import me2 from '../images/decentmate.jpg';
import me3 from '../images/mate.jpg';
import me5 from '../images/mate-icoph.jpg';

function About() {
    const content = "Hi! I'm Martina Reyes and I'm 24 years old. My nickname is Matê and my preferred pronouns are she/her. I am currently a Master of Science student taking up Computer Science in Ateneo de Manila University. I finished undergraduate degree as cum laude in Bachelor of Science in computer science with a specialization in Data Science and Analytics in the same university.";
    const content2 = "As an undergraduate student during the pandemic, I explored quite a few fields such as Web Development, User Experience Research and Design, and Data Science. I took up a few online courses on HTML, CSS, and basic JavaScript. I took electives related to web development: Web Accessibility and Creative CSS Development. I also learned how to use React, Django and CSS pre-processors like Tailwind CSS, SASS and STYLUS. I also learned the UX research process through my invovement with User Experience Society and my Human Computer Interaction class."
    const content3 = "I aspire for a career in Data Science. I enjoy learning and using platforms such as Coursera and Kaggle to increase my Data Science and Analytics skills. I have taken a few database classes that use SQL and noSQL (MongoDB and DynamoDB). I am also familiar with the basic usage of Tableau and Tableau Prep Builder from my Data Visualization elective and internship at Dashlabs.ai. My current thesis deals with using machine learning to search for optimal locations to put up Rural Health units in Sablayan, Occidental Mindoro."
    const content4 = "Currently, I am taking up my Master of Science degree in computer science. I am interested to hone my technical skills, improve in working as an individual and expand on my undergraduate thesis on a national scale. I was able to present my part of my research on the international stage at a public health conference held in Bankok, Thailand last August 2024."
    const content5 = "My personal goal is to use the knowledge, skills, and understanding I have in my course to help other people. I advocate for creating a positive social impact through my work and the skills I have to offer. I work well individually but perfer working collaboratively on a team. I empathize with others, value inclusive environments and adapt a growth mindset in any project or task I partake in."

    const [activeSection, setActiveSection] = useState('description'); // default section
    const handleButtonClick = (section) => {
        setActiveSection(section);  // Update active section based on button clicked
    };

    // const me1 = process.env.PUBLIC_URL + '/assets/_0897.JPG';
    // const me2 = process.env.PUBLIC_URL + '/assets/decentmate.jpg';
    // const me3 = process.env.PUBLIC_URL + '/assets/mate.jpg';
    // const me5 = process.env.PUBLIC_URL + '/assets/mate-icoph.jpg';

    const images = [
        me1, me2, me3, me5
    ];

    return (
        <div>
            <h2>ABOUT ME</h2>
            <Carousel images={images} />
            <div className="button-case">
                    <Button 
                        text="Description" 
                        className="primary-btn" 
                        onClick={() => handleButtonClick('description')}>
                            Description
                    </Button>
                    <Button 
                        text="Stack" 
                        className="primary-btn" // Optionally, you can pass a custom class
                        onClick={() => handleButtonClick('stack')}>
                            Stack
                    </Button>
                    <Button 
                        text="Milestones" 
                        className="primary-btn" // Optionally, you can pass a custom class
                        onClick={() => handleButtonClick('milestones')}>
                            Milestones
                    </Button>
                    
            </div>
            {/* Conditionally Render Content */}
            <div className="content-container">
                {activeSection === 'description' && <AboutDescription
                    content={content}
                    content2={content2}
                    content3={content3}
                    content4={content4}
                    content5={content5}
                    />
                }
                {activeSection === 'stack' && <Stack />}
                {activeSection === 'milestones' && <Milestone />}
            </div>
            
        </div>
    );
}

export default About;
