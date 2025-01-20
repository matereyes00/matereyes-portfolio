import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import Event from './Event';
import './MileStone.css';

const MileStone = () => {
    const tabs = [
        "Academe",
        "Org Work",
        "Internship Experience",
        "Hobbies"
    ];

    const [activeSection, setActiveSection] = useState('academe'); // Default section.
    const handleButtonClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <div className="milestones-container">
                <div className="sidebar-pos">
                    <Sidebar
                        class_name="milestone-sidebar"
                        SideBar_Options={tabs}
                        onTabClick={handleButtonClick}
                        activeTab={activeSection} // Pass active tab to Sidebar.
                    />
                </div>
                <div className="event-pos">
                    {activeSection === 'academe' && <Event EventName="Academe" />}
                    {activeSection === 'org work' && <Event EventName="Org Work" />}
                    {activeSection === 'internship experience' && <Event EventName="Internship Experience" />}
                    {activeSection === 'hobbies' && <Event EventName="Hobbies" />}
                </div>
            </div>
        </div>
    );
};

export default MileStone;
