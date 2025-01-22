// src/Home.js
import React, { useState } from 'react';
import './Home.css';
import TabBar from '../Components/TabBar';
import Event from '../About_/Milestones_/Event';
import who_am_i_img from '../images/mate.jpg';

function Home() {
    const who_am_i_headline = "Martina Therese R. Reyes"
    const who_am_i_ID = "home-whoami"
    const who_am_i_event_name = "Who am I?"
    const event_flex_left =  "home-whoami-flexleft"
    const event_flex_right = "home-whoami-flexright"
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { 
            label: 'Who am I?', 
            content: <Event 
            EventName= {who_am_i_event_name}
            event_id={who_am_i_ID}
            EventHeadline={who_am_i_headline} 
            imageUrl={who_am_i_img}
            event_flex_left={event_flex_left}
            event_flex_right={event_flex_right}
            currentTab={activeTab} // Pass activeTab to Event component
            />},
        
        { label: 'Socials', content: 'This is the content for Tab 2.' },
        { label: 'Publications', content: 'This is the content for Tab 3.' },
    ];

    return (
        <div id="home-terminal">
        <TabBar tabs={tabs} onTabChange={setActiveTab} />
            <div id="home-terminal-content">
                {tabs[activeTab].content} 
                {activeTab === useState(0)}
                {activeTab === useState(1)}
                {activeTab === useState(2)}
            </div>
        </div>
    );
}

export default Home;