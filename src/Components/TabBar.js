import React, { useState } from 'react';

function TabBar({ tabs, onTabChange }) {
    const [activeTab, setActiveTab] = useState(0); // Tracks the active tab locally

    const handleTabClick = (index) => {
        setActiveTab(index);    // Update the local active tab
        onTabChange(index);      // Notify the parent to update the `currentTab`
    };

    return (
        <div className="tab-bar">
        {tabs.map((tab, index) => (
            <button
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            id={tab.id}
            onClick={() => handleTabClick(index)}
            >
            {tab.label}
            </button>
        ))}
        </div>
    );
}

export default TabBar;
