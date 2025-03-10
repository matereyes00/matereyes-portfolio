import React from 'react';
// import '../About_/Milestones_/Event.css';

const WhoAmI = ({ Name, container_id, imageUrl, flex_right, flex_left, Title }) => {
    
    return (
        <div id={container_id} className='flex flex-row text-sm'>
            <div className='m-auto p-5'>
                <h1>{Name}</h1>
                <h4>{Title}</h4>
            </div>

            <div>
                {imageUrl && ( 
                    <img 
                        src={imageUrl} 
                        alt={Name} 
                        className="event-image h-48 w-96 object-scale-down p-5" 
                    />
                )}
            </div>
        </div>
    );
};

export default WhoAmI;
