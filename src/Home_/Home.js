// src/Home.js
import React, { useState } from 'react';
import './Home.css';
import TabBar from '../Components/TabBar';
import me1 from '../images/_0897.JPG';
import me2 from '../images/decentmate.jpg';
import me3 from '../images/mate.jpg';
import me5 from '../images/mate-icoph.jpg';

function Home() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { label: 'Who am I?', content: 'This is the content for Tab 1.' },
        { label: 'Socials', content: 'This is the content for Tab 2.' },
        { label: 'Publications', content: 'This is the content for Tab 3.' },
    ];

    return (
        <div id="home-terminal">
        <TabBar tabs={tabs} onTabChange={setActiveTab} />
            <div id="home-terminal-content">
                {tabs[activeTab].content} 
            </div>
        </div>
    );
}

export default Home;