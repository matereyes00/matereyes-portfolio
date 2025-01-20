// src/about/Stack.js
import React from 'react';
import './Sidebar.css'

const Sidebar = ({ SideBar_Options, class_name, onTabClick }) => {
    return (
        <div className={class_name}>
            {SideBar_Options.map((option) => (
                <button
                    key={option.toLowerCase()} // Unique key.
                    onClick={() => onTabClick(option.toLowerCase())} // Convert option to lowercase.
                    className="sidebar-button" // Style buttons in Sidebar.css.
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;