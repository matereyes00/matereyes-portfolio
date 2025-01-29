import React from 'react';
import './Event.css';

const Event = ({ EventName, event_id, EventHeadline, imageUrl, event_flex_left, event_flex_right }) => {
    
    return (
        <div id={event_id}>
            <div id={event_flex_left}>
                <h1>{EventHeadline}</h1>
                {/* <EventText currentTab={currentTab} /> */}
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
