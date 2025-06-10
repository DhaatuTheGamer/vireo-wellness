
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VireoVLeafLogoIcon } from '../components/Icons';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-between h-full p-8 bg-slate-800 text-center transition-colors duration-300">
      <div className="flex-shrink-0 mt-10"> 
        <div className="flex justify-end items-center w-full text-xs text-slate-400 space-x-2">
            {/* Intentionally empty or reserved for future status icons */}
        </div>
        <h1 className="text-3xl font-bold text-slate-50 mt-8">Vireo</h1>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="relative flex items-center justify-center w-80 h-80 mb-12">
          {/* Large Circle - slower, counter-clockwise */}
          <svg
            className="absolute w-[240px] h-[240px] text-emerald-800 animate-spin-slow-ccw" 
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 5" 
            />
          </svg>

          {/* Small Circle - faster, clockwise */}
          <svg
            className="absolute w-[190px] h-[190px] text-emerald-700 animate-spin-medium-cw" 
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 5"
            />
          </svg>
          {/* Apply z-index to the logo to ensure it's on top of the circles */}
          <VireoVLeafLogoIcon className="w-48 h-72 relative z-10" /> 
        </div>
      </div>

      <div className="w-full mb-8">
        <p className="text-slate-300 bg-slate-700 p-4 rounded-lg shadow">
          Thrive Daily
        </p>
        <button
          onClick={handleContinue}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-4 rounded-lg shadow-md transition duration-150 ease-in-out"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;