// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
    return (
        <header className=" text-4xl font-bold text-blue-600">
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li> {/* Link to Home page */}
            <li><Link to="/about">About</Link></li> {/* Link to About page */}
            </ul>
        </nav>
        </header>
    );
}

export default Header;
