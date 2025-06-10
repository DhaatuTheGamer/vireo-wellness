
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeIcon, ClipboardListIcon, PlusIcon, DeviceTabletIcon, CogIcon, IconProps } from './Icons';

interface NavItemProps {
  to: string;
  icon: React.ReactElement<IconProps>;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === "/dashboard" && location.pathname === "/");

  return (
    <NavLink
      to={to}
      className={`flex flex-col items-center justify-center flex-1 p-2 rounded-lg transition-colors ${
        isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-emerald-400'
      }`}
    >
      {React.cloneElement(icon, { className: `w-6 h-6 mb-1 ${isActive ? 'text-emerald-400' : ''}` })}
      <span className="text-xs">{label}</span>
    </NavLink>
  );
};

const BottomNav: React.FC = () => {
  return (
    <div className="bg-slate-700 shadow-t sticky bottom-0 z-10 border-t border-slate-600 transition-colors duration-300">
      <div className="max-w-md mx-auto h-16 flex justify-around items-center px-2">
        <NavItem to="/dashboard" icon={<HomeIcon />} label="Home" />
        <NavItem to="/daily-meals" icon={<ClipboardListIcon />} label="Meals" />
        <NavLink
          to="/add-meal"
          className="flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full text-white shadow-lg hover:bg-emerald-600 transform active:scale-95 transition-transform -mt-6"
          aria-label="Add Meal"
        >
          <PlusIcon className="w-7 h-7" />
        </NavLink>
        <NavItem to="/devices" icon={<DeviceTabletIcon />} label="Devices" />
        <NavItem to="/settings" icon={<CogIcon />} label="Settings" />
      </div>
    </div>
  );
};

export default BottomNav;