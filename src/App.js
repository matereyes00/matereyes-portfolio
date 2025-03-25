import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import About from './About_/About';
import Stack from './Stack_/Stack';
import Projects from './Projects_/Projects'; 
import MiniProjects from './Projects_/MiniProjects'; 
import Home from './Home_/Home'; 
import './App.css';
function App() {
  
  
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
              {/* Home Page */}
              <Route path="/" element={<Home />} />
              {/* About Page */}
              <Route path="/about" element={<About />} />
              <Route path="/stack" element={<Stack />} />
              {/* Catch-all route: Redirect unknown routes to Home */}
              <Route path="/projects" element={<Projects />} />
              <Route path="/mini-projects" element={<MiniProjects />} />
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;