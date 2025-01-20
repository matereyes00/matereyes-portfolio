import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

const Carousel = ({ images, autoSlideInterval = 5000 }) => {
    const [index, setIndex] = useState(0);
    const length = images.length;

    // Function to move to the next image
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % length);
    };

    // Function to move to the previous image
    const handlePrevious = () => {
        setIndex((prevIndex) => (prevIndex - 1 + length) % length);
    };

    // Set up the auto-slide functionality with setInterval
    useEffect(() => {
        const intervalId = setInterval(handleNext, autoSlideInterval);  // Automatically go to the next image every `autoSlideInterval` ms

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [autoSlideInterval, length]);  // Re-run if `autoSlideInterval` or `length` changes

    return (
        <div className="carousel">
            {/* <button onClick={handlePrevious}>Previous</button> */}
            <img src={images[index]} alt={`Slide ${index + 1}`} />
            {/* <button onClick={handleNext}>Next</button> */}
        </div>
    );
};

export default Carousel;