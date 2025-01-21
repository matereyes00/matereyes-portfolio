// src/components/TabBar.js
import React, { useState } from 'react';

function TabBar({ tabs, onTabChange }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
        onTabChange(index);
    };

    return (
        <div className="tab-bar">
        {tabs.map((tab, index) => (
            <button
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
            >
            {tab.label}
            </button>
        ))}
        </div>
    );
}

export default TabBar;