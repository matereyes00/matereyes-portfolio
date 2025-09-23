import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer'; // Adjust path if needed
import BackButton from '../common/BackButton';

const Layout = () => {
  const location = useLocation();

  // This will be true for any path that starts with '/mini-projects/'
  const isMiniProjectPage = location.pathname.startsWith('/mini-projects/');

  return (
    <div className="App">
        {!isMiniProjectPage && <Header />}
        {isMiniProjectPage && <BackButton />}
        <main>
            <Outlet />
        </main>
        {/* {!isMiniProjectPage && <Footer />} */}
    </div>
  );
};

export default Layout;