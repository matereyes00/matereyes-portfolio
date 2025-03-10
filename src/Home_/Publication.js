import React from 'react';
// import './Home.css';

const Publication = ({ PubTitle, PubId, PubDescription,articleUrl, PubDate, PubAuthors, embed }) => {
    
    return (
        <div id={PubId} className="border-red-700 my-8">
            <h1 className='font-semibold mx-8'><a href={articleUrl} target="_blank" rel="noreferrer">{PubTitle}</a></h1>
            <h4 className="text-sm italic mx-16">{PubDate} | {PubAuthors}</h4>
            <p className='text-sm mx-8'>{PubDescription}</p>
            {embed}
        </div>
    );
};

export default Publication;
