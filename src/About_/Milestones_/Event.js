// src/about/AboutStack.js
import React from 'react';
import './Event.css'; 
import './EventText.js'; 
import EventText from './EventText';


const Event = ({EventName, event_id, 
                EventHeadline, 
                imageUrl, event_flex_left,
                event_flex_right}) => {

    const event_text ="Junior Software Engineer at UBX and Master of Science in Computer Science student at Ateneo de Manila University";
    return (
        <div id={event_id}>
            <div id={event_flex_left}>
                <h2>{EventHeadline}</h2>
                <EventText event_text={event_text}/>
            </div>
            <div id={event_flex_right}>
                {imageUrl && ( 
                    <img 
                        src={imageUrl} 
                        alt={EventName} 
                        className="event-image" 
                        />
                )}
            </div>
        </div>
    );
};

export default Event;