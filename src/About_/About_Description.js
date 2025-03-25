import React from 'react';


const AboutDescription = ({ content, content2, content3, content4, content5 }) => {
    return (
        <div>
            {/* <h2>{title}</h2> */}
            <div className="about-content">
                <p>{content}</p>
                <p>{content2}</p>
                <p>{content3}</p>
                <p>{content4}</p>
                <p>{content5}</p>
        </div>
        </div>
    );
};

export default AboutDescription;