import React from 'react';
import '../About_/Milestones_/Event.css';

const WhoAmI = ({ Name, container_id, imageUrl, flex_right, flex_left, Title }) => {
    
    return (
        <div id={container_id}>
            <div id={flex_left}>
                <h1>{Name}</h1>
                <h4>{Title}</h4>
            </div>

            <div id={flex_right}>
                {imageUrl && ( 
                    <img 
                        src={imageUrl} 
                        alt={Name} 
                        className="event-image" 
                    />
                )}
            </div>
        </div>
    );
};

export default WhoAmI;
