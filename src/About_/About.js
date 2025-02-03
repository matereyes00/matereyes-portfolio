// src/About.js
import React, {useState} from 'react';
import Journey from './Milestones_/Journey';
import Milestone from './Milestones_/MileStone';
import './About.css'; 
import './Carousel'; 
import TabBar from '../Components/TabBar';

import Button from '../Components/Button'; // Import the Button component
import Stack from './Stack_/Stack';

function About() {
    
    const [activeTab, setCurrentTab] = useState(0); 
        const handleTabChange = (index) => {
            setCurrentTab(index);
        };

    const tabs = [
        { label: 'My Journey (so far)', id: 'tab1', content: <><Journey /></> },
        { label: 'Stack', id: 'tab2', content: <><Stack /></> },
        { label: 'Projects', id: 'tab3', content: <><Milestone /></>},
    ];

    return (
        <div id="about-terminal">
            <TabBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
            {tabs[activeTab].content}
        </div>
    );
}

export default About;
