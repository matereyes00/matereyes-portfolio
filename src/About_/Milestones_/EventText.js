import React, { useState, useEffect } from 'react';
import './Event.css'; 

const EventText = ({ event_text, currentTab }) => { 
    const tab1_text = "Junior Software Engineer at UBX and current Master of Science in Computer Science student at Ateneo de Manila University"
    const [displayText, setDisplayText] = useState(event_text);

    useEffect(() => {
        switch (currentTab) {
        case 0: 
            setDisplayText({tab1_text}); 
            break;
        case 1: 
            setDisplayText("Text for Tab 2"); 
            break;
        case 2: 
            setDisplayText("Text for Tab 3"); 
            break;
        default:
            setDisplayText(event_text); 
        }
    }, [currentTab]); // Dependency array includes currentTab

    return (
        <p>{displayText}</p>
    );
};

export default EventText;