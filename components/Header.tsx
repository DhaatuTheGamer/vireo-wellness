
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, WifiIcon, BatteryIcon } from './Icons';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  backPath?: string;
  rightContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false, backPath = -1, rightContent }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (typeof backPath === 'string') {
      navigate(backPath);
    } else {
      navigate(backPath as number);
    }
  };

  return (
    <div className="p-4 flex items-center justify-between bg-slate-800 sticky top-0 z-10 h-16 border-b border-slate-600 transition-colors duration-300">
      <div className="flex items-center">
        {showBackButton && (
          <button onClick={handleBack} className="mr-3 p-1 text-slate-300 hover:text-slate-100 transition-colors duration-150">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}
        <h1 className="text-xl font-semibold text-slate-50">{title}</h1>
      </div>
      <div className="flex items-center space-x-2 text-xs text-slate-400">
        {rightContent ? rightContent : (
          <>
            <span>11:10</span>
            <WifiIcon className="w-4 h-4" />
            <BatteryIcon className="w-5 h-5" level={80} />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;