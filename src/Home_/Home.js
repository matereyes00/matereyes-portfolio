import React, { useState } from 'react';
import Socials from './socials'
import Publication from './Publication'
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

    const pub_titles = ["Using K-means clustering: performing site selection to identify build-able areas for health centers (RHUs)", "Rust Programming: A Safe, Fast, and Versatile Choice"];
    const pub_date = ['Dec 2, 2023', 'Dec 2, 2023'];
    const pub_authors = ['Martina Therese R. Reyes', 'Martina Therese R. Reyes']
    const pub_article_urls = ["https://medium.com/@martina.therese.reyes/using-k-means-clustering-performing-site-selection-to-identify-build-able-areas-for-health-centers-a089ef18f86f", "https://medium.com/@martina.therese.reyes/rust-programming-a-safe-fast-and-versatile-choice-71428b87c972"]
    const pub_descriptions = [
        //first 
        "This article was the final output of our Advanced Algorithms and Data Structures class for our M.S. Computer Science course (CSCI 201). The task was to research on how one algorithm or data structure works and how it's applied onto real world problems. My article deals with the k-means clustering algorithm and how it can be used to help improve healthcare facility infrastructure. I break the algorithm down step-by-step then demonstrate how it is applied to identify potential areas for health facility construction.",
        //second
        "This article was the final output of our Programming Languages and Paradigms class for my M.S. Computer Science course (CSCI 202). The task was to choose one programming language and research about it. I chose the Rust programming language because I personally never used it in the academic nor professional setting. The article contains a compact yet detailed discussion of Rust, its unique features,advantages, disadvantages, and usecases in the industry."
    ];

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
                {pub_titles.map((title, index) => (
                        <Publication
                            key={index} 
                            PubTitle={title}
                            PubId={`publication-${index}`} 
                            PubDate={pub_date[index]}
                            PubAuthors={pub_authors[index]}
                            PubDescription={pub_descriptions[index]}
                            articleUrl={pub_article_urls[index]}
                        />
                    ))}
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