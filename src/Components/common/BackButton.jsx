import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
  // useNavigate is a hook that gives you a function to navigate programmatically
  const navigate = useNavigate();

  // The navigate(-1) function is equivalent to clicking the browser's back button
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBackClick}
      // These classes make the button float in the top-left corner
      className="fixed top-5 left-5 z-50 bg-slate-800 text-white hover:bg-slate-700 font-bold py-2 px-4 rounded-full shadow-lg transition-colors flex items-center gap-2"
      aria-label="Go back to previous page"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </button>
  );
};

export default BackButton;