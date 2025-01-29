import React, { useState } from 'react';
import Socials from './socials'
import './Home.css';
import TabBar from '../Components/TabBar';
import Event from '../About_/Milestones_/Event';
import EventText from '../About_/Milestones_/EventText';
import who_am_i_img from '../images/mate.jpg';
import socialsimg from '../images/decentmate.jpg';

function Home() {
    const who_am_i_headline = "Martina Therese R. Reyes";
    const who_am_i_ID = "home-whoami";
    const who_am_i_event_name = "Who am I?";
    const event_flex_left = "home-whoami-flexleft";
    const event_flex_right = "home-whoami-flexright";
    const tab1_text = "Junior Software Engineer at UBX and current Master of Science in Computer Science student at Ateneo de Manila University";

    const [activeTab, setCurrentTab] = useState(0); 
    const handleTabChange = (index) => {
        setCurrentTab(index);
    };

    const tabs = [
        { label: 'Who am I?', id: 'tab1', content: 
            <>
                <Event 
                    EventName={who_am_i_event_name}
                    event_id={who_am_i_ID}
                    EventHeadline={who_am_i_headline} 
                    imageUrl={who_am_i_img}
                    event_flex_left={event_flex_left}
                    event_flex_right={event_flex_right}
                    currentTab={activeTab}/> 
                <EventText displayText={tab1_text} />
            </>
        },
        { label: 'Socials', id: 'tab2', content: 
            <>
                <Event 
                    EventName="Social Media"
                    imageUrl={socialsimg}
                    currentTab={activeTab} /> 
                <Socials />
            </>
        },
        { label: 'Publications', id: 'tab3', content: 
            <>
                <Event 
                    EventName="Publications"
                    currentTab={activeTab} />
            </>
        },
    ];

    return (
        <div id="home-terminal">
            <TabBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
            <div id="home-terminal-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default Home;