import {React} from 'react';
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom


const MiniProjects = () => {
    return (
        <>
            <h1>minu projects</h1>
            <Link to="/mini-projects/steak-dashboard">Steak Dashboard</Link>
        </>
    )
}

export default MiniProjects