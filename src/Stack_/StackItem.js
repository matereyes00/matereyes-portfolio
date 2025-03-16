// src/about/Stack.js
import React from 'react';

const StackItem = ({ItemName, image}) => {
    return (
        <div className="text-lg flex flex-row justify-around mx-auto my-auto w-100 bg-opacity-70 p-2 rounded-3">
            {/* <div className='mt-2'>
                <h3>{ItemName}</h3>
            </div> */}
            <div className=''>
                <img 
                    src={image} alt={ItemName} 
                    className="h-12 w-12" />
            </div>
        </div>
    );
};

export default StackItem;