// src/components/Button.js
import React from 'react';
import './Button.css'; // Import optional styles (you can skip this if you prefer inline styles or other ways)

const Button = ({ text, onClick, style, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            style={style} // Allow the user to pass in custom styles
            className={`button ${className}`} // Combine the default class and any passed-in className
            disabled={disabled} // Optional prop to disable the button
        >
            {text}
        </button>
    );
};

export default Button;
