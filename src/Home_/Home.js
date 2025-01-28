// src/Home.js
import React, { useState } from 'react';
import './Home.css';
import TabBar from '../Components/TabBar';
import Event from '../About_/Milestones_/Event';
import who_am_i_img from '../images/mate.jpg';
import socialsimg from '../images/decentmate.jpg';

function Home() {
    const who_am_i_headline = "Martina Therese R. Reyes"
    const who_am_i_ID = "home-whoami"
    const who_am_i_event_name = "Who am I?"
    const event_flex_left =  "home-whoami-flexleft"
    const event_flex_right = "home-whoami-flexright"

    const [activeTab, setCurrentTab] = useState(0); // Initialize the current tab as 0

    // Function to update the currentTab when a tab is clicked
    const handleTabChange = (index) => {
        setCurrentTab(index);
    };
    const tabs = [
        { label: 'Who am I?', id: 'tab1', content: <Event 
                        EventName= {who_am_i_event_name}
                        event_id={who_am_i_ID}
                        EventHeadline={who_am_i_headline} 
                        imageUrl={who_am_i_img}
                        event_flex_left={event_flex_left}
                        event_flex_right={event_flex_right}
                        currentTab={activeTab}
                    />},
        { label: 'Socials', id: 'tab2', content: <Event 
                        EventName="Social Media"
                        EventHeadline="Reach me here"
                        imageUrl={socialsimg}
                        event_flex_left={event_flex_left}
                        event_flex_right={event_flex_right}
                        currentTab={activeTab} />},
        { label: 'Publications', id: 'tab3',  content: <Event 
            EventName="Publications"
            EventHeadline="Publications"
            event_flex_left={event_flex_left}
            event_flex_right={event_flex_right}
            currentTab={activeTab}
            />
        },
    ];

    return (
        <div id="home-terminal">
            <TabBar tabs={tabs} onTabChange={handleTabChange} />
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