import {React} from 'react';
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom


const MiniProjects = () => {
    return (
        <>
            <h1>Mini projects</h1>
            <Link to="/mini-projects/steak-dashboard" className='text-lg hover:bg-blue-300'>Steak Dashboard</Link>
        </>
    )
}

export default MiniProjects