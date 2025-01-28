import React, { useState, useEffect } from 'react';
import './Event.css';

const EventText = ({ currentTab }) => { 
    const tab1_text = "Junior Software Engineer at UBX and current Master of Science in Computer Science student at Ateneo de Manila University";
    const [displayText, setDisplayText] = useState(tab1_text);  // Default to tab1_text
    
    useEffect(() => {
        // Update displayed text based on currentTab
        switch (currentTab) {
            case 0: 
                setDisplayText(tab1_text); 
                break;
            case 1: 
                setDisplayText("Text for Tab 2");
                break;
            case 2: 
                setDisplayText("Text for Tab 3");
                break;
            default:
                setDisplayText(tab1_text);  // Default text for unrecognized tab values
                break;
        }
    }, [currentTab]); // This useEffect will rerun when currentTab changes

    return (
        <p>{displayText}</p>
    );
};

export default EventText;
