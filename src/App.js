// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About_/About'; // Import the About component

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          {/* Use Routes instead of Switch, and element instead of component */}
          <Routes>
            <Route path="/" element={<h2>Home Page</h2>} />
            <Route path="/about" element={<About />} /> {/* Link to About page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
