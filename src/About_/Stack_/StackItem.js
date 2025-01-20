// src/about/Stack.js
import React from 'react';
import './Stack.css'; 

const StackItem = ({ItemName, image, className}) => {
    return (
        <div className="stackItem">
            <div className='stackItem-left'>
                <h2>{ItemName}</h2>
            </div>
            <div className='stackItem-right'>
                <img 
                    src={image} alt={ItemName} 
                    className={className} />
            </div>
        </div>
    );
};

export default StackItem;